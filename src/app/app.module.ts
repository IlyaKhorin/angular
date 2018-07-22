import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CourseListModule } from './course-list/course-list.module';
import { ModalDialogModule } from 'ngx-modal-dialog';
import { ConfirmationDialogComponent } from './Common/confirmation-dialog/confirmation-dialog.component';
import { SimpleModalService, SimpleModalModule } from 'ngx-simple-modal';

@NgModule({
  declarations: [
    AppComponent,
    ConfirmationDialogComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    CourseListModule,    
    SimpleModalModule,    
  ],
  providers: [SimpleModalService],
  entryComponents: [
    ConfirmationDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
