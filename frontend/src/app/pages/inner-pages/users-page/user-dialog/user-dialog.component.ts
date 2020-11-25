import { Component } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Subject } from 'rxjs';

@Component({
  selector: 'nat-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.scss']
})
export class UserDialogComponent {

  loading: boolean = false;
  submit: Subject<void> = new Subject<void>();

  constructor(
    public dialogRef: MatDialogRef<UserDialogComponent>
  ) {}

  submitForm() {
    this.submit.next();
  }

  loadingForm(loading: boolean) {
    this.loading = loading;
  }

  resultForm(result: any) {
    console.log("Result in dialog", result);
    this.onClose();
  }

  onClose(): void {
    this.dialogRef.close();
  }

}
