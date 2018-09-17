import { Component, OnInit, Input } from '@angular/core';
import { CourseService } from '../course.service';
import { ICourseListItem } from '../icourse-list-item';
import { CourseListItem } from '../course-list-item';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DateValidationDirective } from '../../app-common/date-input/date-validation.directive';

@Component({
  selector: 'app-course-list-item-edit',
  templateUrl: './course-list-item-edit.component.html',
  styleUrls: ['./course-list-item-edit.component.css']
})
export class CourseListItemEditComponent implements OnInit {

  public courseForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    date: new FormControl('', [Validators.required]),
    length: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    description: new FormControl('', [Validators.required, Validators.maxLength(500)]),
    authors: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    isTopRated: new FormControl()
  });

  constructor(private courseService: CourseService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(async (data) => {
      if (data['id']) {
        const courseItem = await this.courseService.getCourseItem(Number(data['id'])).toPromise();
        if (!courseItem) {
          this.router.navigate(['notFound'], { skipLocationChange: true });
        } else {
          this.enrichForm(courseItem);
        }
      }
    });
  }

  private enrichForm(item: ICourseListItem) {
    this.courseForm.setValue(item);
  }

  public async saveItem() {
    if (this.courseForm.value.id) {
      await this.courseService.editCourseItem(this.courseForm.value).toPromise();
    } else {
      await this.courseService.addCourseItem(this.courseForm.value).toPromise();
    }
    this.router.navigate(['courses']);
  }

  public cancelItem() {
    this.router.navigate(['courses']);
  }

  get name() { return this.courseForm.get('name'); }
  get date() { return this.courseForm.get('date'); }
  get length() { return this.courseForm.get('length'); }
  get description() { return this.courseForm.get('description'); }
  get authors() { return this.courseForm.get('authors'); }
  get isTopRated() { return this.courseForm.get('isTopRated'); }
}
