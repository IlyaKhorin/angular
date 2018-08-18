import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CourseListModule } from './course-list/course-list.module';
import { ModalDialogModule } from 'ngx-modal-dialog';
import { SimpleModalService, SimpleModalModule } from 'ngx-simple-modal';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppCommonModule } from './app-common/app-common.module';
import { ROUTES } from './app.routes';
import { HttpRequest } from 'selenium-webdriver/http';
import { AuthInterceptor } from './core/auth/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    HttpClientModule,
    CourseListModule,
    SimpleModalModule,
    CommonModule,
    AppCommonModule,
    RouterModule.forRoot(ROUTES, { useHash: true })
  ],
  providers: [
    SimpleModalService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
