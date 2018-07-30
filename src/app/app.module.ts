import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CourseListModule } from './course-list/course-list.module';
import { ModalDialogModule } from 'ngx-modal-dialog';
import { SimpleModalService, SimpleModalModule } from 'ngx-simple-modal';
import { CommonModule } from '@angular/common';
import { AppCommonModule } from './app-common/app-common.module';

@NgModule({
  declarations: [
    AppComponent    
  ],
  imports: [
    BrowserModule,
    CoreModule,
    CourseListModule,    
    SimpleModalModule,
    CommonModule,
    AppCommonModule
  ],
  providers: [SimpleModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
