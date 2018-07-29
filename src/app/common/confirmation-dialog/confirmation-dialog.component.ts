import { Component, OnInit } from '@angular/core';
import { SimpleModalComponent } from 'ngx-simple-modal';
export interface ConfirmModel {
  title:string;
  message:string;
}
@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.css']
})

export class ConfirmationDialogComponent extends SimpleModalComponent<ConfirmModel, boolean> implements ConfirmModel {
  public title: string;
  public message: string;

  constructor() {
    super();
  }

  confirm() {
    // we set modal result as true on click on confirm button,
    // then we can get modal result from caller code
    this.result = true;
    this.close();
  }
}
