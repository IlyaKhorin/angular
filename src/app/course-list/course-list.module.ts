import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseListItemComponent } from './course-list-item/course-list-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CourseSearchComponent } from './course-search/course-search.component';
import { ReleaseHighlighterDirective } from './course-list-item/release-highlighter.directive';
import { OrderByPipe } from './order-by.pipe';
import { CourseListItemEditComponent } from './course-list-item-edit/course-list-item-edit.component';
import { AppCommonModule } from '../app-common/app-common.module';
import { RouterLink, RouterModule } from '@angular/router';
import { routing } from './course-list.routes';
import { DateValidationDirective } from '../app-common/date-input/date-validation.directive';

@NgModule({
  imports: [
    CommonModule,
    AppCommonModule,
    RouterModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    CourseListComponent,
    CourseListItemComponent,
    CourseListItemEditComponent,
    CourseSearchComponent,
    ReleaseHighlighterDirective,
    DateValidationDirective,
    OrderByPipe,
  ],
  exports: [CourseListComponent, CourseListItemEditComponent],
})
export class CourseListModule { }
