import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseListItemComponent } from './course-list-item/course-list-item.component';
import { FormsModule } from '@angular/forms';
import { CourseSearchComponent } from './course-search/course-search.component';
import { ReleaseHighlighterDirective } from './course-list-item/release-highlighter.directive';
import { OrderByPipe } from './order-by.pipe';
import { FilterPipe } from './filter.pipe';
import { CourseListItemEditComponent } from './course-list-item-edit/course-list-item-edit.component';
import { AppCommonModule } from '../app-common/app-common.module';
import { RouterLink, RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppCommonModule,
    RouterModule,
  ],
  declarations: [
    CourseListComponent,
    CourseListItemComponent,
    CourseListItemEditComponent,
    CourseSearchComponent,
    ReleaseHighlighterDirective,
    OrderByPipe,
    FilterPipe],
  exports: [CourseListComponent,CourseListItemEditComponent],
  providers:[FilterPipe]
})
export class CourseListModule { }
