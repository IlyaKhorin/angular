import { Component } from '@angular/core';
import { AuthService } from './core/auth/auth.service';
import { CourseService } from './course-list/course.service';
import { Store } from '@ngrx/store';
import { AppState } from './app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app';
  constructor(private store: Store<AppState>) {
  }
}
