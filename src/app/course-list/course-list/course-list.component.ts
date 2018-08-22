import { Component, OnInit } from '@angular/core';
import { ICourseListItem } from '../icourse-list-item';
import { CourseService } from '../course.service';
import { SimpleModalService } from "ngx-simple-modal";
import { SimpleModalComponent } from 'ngx-modal-dialog';
import { AuthService } from '../../core/auth/auth.service';
import { ConfirmationDialogComponent } from '../../app-common/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  public courseItems: ICourseListItem[] = [];
  public searchText: string;
  public page = 0;

  constructor(private courseService: CourseService, private simpleModalService: SimpleModalService, private authService: AuthService) {
  }

  public ngOnInit() {
    this.resetItems();
    this.loadItems();
  }

  public deleteCourse(courseItem: ICourseListItem) {
    this.showDeleteConfirm(courseItem);
  }

  public loadMoreCourses() {
    this.page++;
    this.loadItems();
  }

  public searchCourses(searchText: string) {
    this.resetItems();
    this.searchText = searchText;
    this.loadItems();
  }

  private resetItems() {
    this.page = 0;
    this.courseItems = [];
  }

  private loadItems() {
    this.courseService.getCourseItems(this.page, this.searchText).subscribe(s => this.courseItems = this.courseItems.concat(s));
  }

  private showDeleteConfirm(courseItem: ICourseListItem) {
    const disposable = this.simpleModalService.addModal(ConfirmationDialogComponent, {
      title: 'Delete item',
      message: 'Are you sure that you want to delete item?'
    })
      .subscribe((isConfirmed) => {
        //We get modal result
        if (isConfirmed) {
          this.courseService.removeCourseItem(courseItem).subscribe(_ => this.loadItems());
        }
      });
    //We can close modal calling disposable.unsubscribe();
    //If modal was not closed manually close it by timeout
    setTimeout(() => {
      disposable.unsubscribe();
    }, 10000);
  }

}

