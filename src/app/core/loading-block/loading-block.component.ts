import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../app.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-loading-block',
  templateUrl: './loading-block.component.html',
  styleUrls: ['./loading-block.component.css']
})
export class LoadingBlockComponent implements OnInit {

  public inProgress: Observable<boolean>;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.inProgress = this.store.pipe(select(s => s.progress.inProgress));
  }

}
