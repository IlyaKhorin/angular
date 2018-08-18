import { Injectable } from '@angular/core';
import { CourseListItem } from './course-list-item';
import { CourseDomain } from './course-domain.enum';
import { ICourseListItem } from './icourse-list-item';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoadingBlockService } from '../core/loading-block/loading-block.service';

@Injectable({
  providedIn: 'root'
})

export class CourseService {
  private BASE_URL = 'http://localhost:3004';
  private PAGE_SIZE = 3;
  constructor(private http: HttpClient, private blockService: LoadingBlockService) {
  }

  public getCourseItem(id: number): Observable<ICourseListItem> {
    return this.blockService.withBlock(this.http.get<ICourseListItem>(`${this.BASE_URL}/courses/${id}`));
  }

  public getCourseItems(page: number = 0, textQuery: string = null): Observable<ICourseListItem[]> {
    let httpParams = new HttpParams()
      .set('start', (page * this.PAGE_SIZE).toString())
      .set('count', this.PAGE_SIZE.toString());

    if (textQuery) {
      httpParams = httpParams.set('textFragment', textQuery);
    }
    return this.blockService.withBlock(this.http.get<ICourseListItem[]>(`${this.BASE_URL}/courses`, { params: httpParams }));
  }

  public removeCourseItem(item: ICourseListItem): Observable<ICourseListItem> {
    return this.blockService.withBlock(this.http.delete<ICourseListItem>(`${this.BASE_URL}/courses/${item.id}`));
  }

  public addCourseItem(item: ICourseListItem): Observable<ICourseListItem> {
    return this.blockService.withBlock(this.http.post<ICourseListItem>(`${this.BASE_URL}/courses`, item));
  }

  public editCourseItem(item: ICourseListItem) {
    return this.blockService.withBlock(this.http.put<ICourseListItem>(`${this.BASE_URL}/courses/${item.id}`, item));
  }

}
