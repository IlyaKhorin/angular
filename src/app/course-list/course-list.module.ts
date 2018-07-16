import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseListItemComponent } from './course-list-item/course-list-item.component';
import { FormsModule } from '@angular/forms';
import { CourseSearchComponent } from './course-search/course-search.component';
import { ReleaseHighlighterDirective } from './course-list-item/release-highlighter.directive';
import { OrderByPipe } from './order-by.pipe';
import { FilterPipe } from './filter.pipe';
import { DurationPipe } from './course-list-item/duration.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    CourseListComponent,
    CourseListItemComponent,
    CourseSearchComponent,
    ReleaseHighlighterDirective,
    DurationPipe,
    OrderByPipe,
    FilterPipe],
  exports: [CourseListComponent],
  providers:[FilterPipe]
})
export class CourseListModule { }
