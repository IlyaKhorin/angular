import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseListItemComponent } from './course-list-item/course-list-item.component';
import { FormsModule } from '@angular/forms';
import { CourseSearchComponent } from './course-search/course-search.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [CourseListComponent, CourseListItemComponent, CourseSearchComponent],
  exports: [CourseListComponent]
})
export class CourseListModule { }
