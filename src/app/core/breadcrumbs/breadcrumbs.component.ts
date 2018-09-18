import { Component, OnInit, OnChanges } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { isNgTemplate } from '@angular/compiler';
import { ActivatedRoute, UrlSegment, NavigationEnd, Router } from '@angular/router';
import { CourseService } from '../../course-list/course.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {

  public breadcrumbs: Breadcrumb[];
  constructor(private route: ActivatedRoute, private router: Router, private courseService: CourseService) { }

  ngOnInit(): void {
    this.router.events
      .subscribe(async event => {
        if (!(event instanceof NavigationEnd)) {
          return;
        }
        let urls = event.urlAfterRedirects.split('/');
        this.breadcrumbs = new Array<Breadcrumb>(urls.length);
        for (let i = 0; i < urls.length; i++) {
          this.breadcrumbs[i] = await this.resolveBreadcrumb(urls.splice(0, i + 1));
          urls = event.urlAfterRedirects.split('/');
        }
      });
  }

  private async resolveBreadcrumb(urls: string[]): Promise<Breadcrumb> {
    const urlString = urls.join('/');
    switch (true) {
      case urlString.startsWith('/courses/'):
        const id = Number(urls[urls.length - 1]);
        if (id) {
          const item = await this.courseService.getCourseItem(id).toPromise();
          return new Breadcrumb(null, item == null ? null : item.name);
        } else {
          return new Breadcrumb(null, null);
        }
      case urlString.startsWith('/courses'):
        return new Breadcrumb('/courses', 'Courses');
      case urlString.startsWith(''):
        return new Breadcrumb('', 'Home');
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
