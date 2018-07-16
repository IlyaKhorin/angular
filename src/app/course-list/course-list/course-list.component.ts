import { Component, OnInit } from '@angular/core';
import { ICourseListItem } from '../icourse-list-item';
import { CourseService } from '../course.service';
import { FilterPipe } from '../filter.pipe';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  public courseItems: ICourseListItem[] = [];
  public filteredItems: ICourseListItem[] = [];

  constructor(private filterPipe: FilterPipe,  private courseService: CourseService) { }

  public ngOnInit() {
    this.reloadItems();
  }

  public deleteCourse(courseItem: ICourseListItem) {
    console.log("Deleting item: id:", courseItem.id);
    this.courseService.removeCourseItem(courseItem);
    this.reloadItems();
  }

  public createCourse() {
    console.log("Creating item");
    this.courseService.addCourseItem(null);
    this.reloadItems();
  }

  public loadMoreCourses(){
    console.log("Loading more");
    this.courseService.loadMore();
    this.reloadItems();
  }

  public searchCourses(searchText:string){
    this.reloadItems(searchText)
  }

  private reloadItems(searchText = null) {
      this.courseItems = this.filterPipe.transform(this.courseService.getCourseItems(), searchText);
  }
}
