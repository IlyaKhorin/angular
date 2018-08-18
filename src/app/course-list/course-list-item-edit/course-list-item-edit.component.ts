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

  @Input() public courseItem: ICourseListItem;
  private courseId: number;

  constructor(private courseService: CourseService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(async (data) => {
      if (data['id']) {
        this.courseItem = await this.courseService.getCourseItem(Number(data['id'])).toPromise();
        if (!this.courseItem) {
          this.router.navigate(['notFound'], { skipLocationChange: true });
        }
      } else {
        this.courseItem = new CourseListItem(null, null, new Date(Date.now()), null, null, null, null)
      }
    });
  }

  public async saveItem() {
    if (this.courseItem.id) {
      await this.courseService.editCourseItem(this.courseItem).toPromise();
    } else {
      await this.courseService.addCourseItem(this.courseItem).toPromise();
    }
    this.router.navigate(['courses']);
  }

  public cancelItem() {
    this.router.navigate(['courses']);
  }
}
