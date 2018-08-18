import { Injectable, ApplicationRef, ChangeDetectorRef } from '@angular/core';
import { Observable, of, concat, range, merge, interval, BehaviorSubject } from 'rxjs';
import { tap, filter, count, delay, scan, mapTo, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoadingBlockService {
  private blocked = new BehaviorSubject(0);

  public block() {
    this.blocked.next(1);
  }

  public unblock() {
    this.blocked.next(-1);
  }

  public isBlocked(): Observable<boolean> {
    return this.blocked
      .pipe(
        scan((acc, curr) => acc + curr),
        tap(i => console.log(i)),
        map(i => i > 0));
  }

  public withBlock<T>(observable: Observable<T>): Observable<T> {
    return of<T>(null)
      .pipe(tap(_ => this.block()), filter(_ => false))
      .pipe(delay(500)) // fake delay
      .pipe(o => concat(o, observable))
      .pipe(tap(_ => { }, _ => this.unblock(), () => this.unblock()));
  }
}
