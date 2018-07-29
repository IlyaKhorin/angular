import { Component, OnInit, Input } from '@angular/core';
import { CourseService } from '../course.service';
import { ICourseListItem } from '../icourse-list-item';
import { CourseListItem } from '../course-list-item';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-course-list-item-edit',
  templateUrl: './course-list-item-edit.component.html',
  styleUrls: ['./course-list-item-edit.component.css']
})
export class CourseListItemEditComponent implements OnInit {

  @Input() public courseItem:ICourseListItem; 
  private courseId:number;

  constructor(private courseService:CourseService,private route:ActivatedRoute, private router:Router) {  }

  ngOnInit() {
    this.route.params.subscribe((data) => {
      if(data["id"] === "new"){
        this.courseItem = new CourseListItem(null,null,new Date(Date.now()),null,null,null,null)
      }else{
        this.courseItem = this.courseService.getCourseItem(Number(data["id"]));
        if(!this.courseItem){
          this.router.navigate(["notFound"],{ skipLocationChange: true})
        }
      }
    })
  }

  public saveItem(){
    if(this.courseItem.id){
      this.courseService.editCourseItem(this.courseItem)
    }else{
      this.courseService.addCourseItem(this.courseItem)
    }
    this.router.navigate(["courses"])
  }

  public cancelItem(){
    this.router.navigate(["courses"])
  }
}
