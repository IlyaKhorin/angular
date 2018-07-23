import { Component, OnInit } from '@angular/core';
import { ICourseListItem } from '../icourse-list-item';
import { CourseService } from '../course.service';
import { FilterPipe } from '../filter.pipe';
import { SimpleModalService } from "ngx-simple-modal";
import { SimpleModalComponent } from 'ngx-modal-dialog';
import { ConfirmationDialogComponent } from '../../Common/confirmation-dialog/confirmation-dialog.component';
import { AuthService } from '../../core/auth/auth.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  public courseItems: ICourseListItem[] = [];
  public searchText: string;

  constructor(private filterPipe: FilterPipe, private courseService: CourseService, private simpleModalService: SimpleModalService, private authService: AuthService) {
  }

  public ngOnInit() {
    this.reloadItems();
  }

  public deleteCourse(courseItem: ICourseListItem) {
    this.showDeleteConfirm(courseItem);
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
    this.searchText = searchText;
    this.reloadItems()
  }
 
  private reloadItems() {
      this.courseItems = this.filterPipe.transform(this.courseService.getCourseItems(), this.searchText);
  }

  private showDeleteConfirm(courseItem: ICourseListItem) {
    let disposable = this.simpleModalService.addModal(ConfirmationDialogComponent, {
      title: 'Delete item',
      message: 'Are you sure that you want to delete item?'
    })
      .subscribe((isConfirmed) => {
        //We get modal result
        if (isConfirmed) {
          this.courseService.removeCourseItem(courseItem);
          this.reloadItems();
        }
      });
    //We can close modal calling disposable.unsubscribe();
    //If modal was not closed manually close it by timeout
    setTimeout(() => {
      disposable.unsubscribe();
    }, 10000);
  }

}

