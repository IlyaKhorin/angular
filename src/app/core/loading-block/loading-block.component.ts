import { Component, OnInit } from '@angular/core';
import { LoadingBlockService } from './loading-block.service';

@Component({
  selector: 'app-loading-block',
  templateUrl: './loading-block.component.html',
  styleUrls: ['./loading-block.component.css']
})
export class LoadingBlockComponent implements OnInit {

  public blocked = false;
  constructor(public blockService: LoadingBlockService) { }

  ngOnInit() {
    this.blockService.isBlocked().subscribe(blocked => this.blocked = blocked);
  }

}
