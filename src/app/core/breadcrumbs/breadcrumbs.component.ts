import { Component, OnInit, OnChanges } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { isNgTemplate } from '@angular/compiler';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { CourseService } from '../../course-list/course.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {

  public breadcrumbs: Breadcrumb[];
  constructor(private route: ActivatedRoute, private courseService: CourseService) { }

  ngOnInit(): void {
    this.route.url.subscribe(urls => {
      this.breadcrumbs = new Array<Breadcrumb>(urls.length);
      for (let i = 0; i < urls.length; i++) {
        this.breadcrumbs[i] = this.resolveBreadcrumb(urls.splice(i));
      }
    });
  }

  private resolveBreadcrumb(urls: UrlSegment[]): Breadcrumb {
    const urlString = urls.join('/');
    switch (urlString) {
      case '':
        return new Breadcrumb('', 'Home');
      case 'courses':
        return new Breadcrumb('/courses', 'Courses');
      case 'courses/':
        const id = Number(urls[urls.length - 1]);
        return new Breadcrumb('/courses/' + id, this.courseService.getCourseItem(id).title);
      default:
        return null;
    }
  }

}

class Breadcrumb {
  constructor(
    public link: string,
    public title: string,
  ) { }

}
