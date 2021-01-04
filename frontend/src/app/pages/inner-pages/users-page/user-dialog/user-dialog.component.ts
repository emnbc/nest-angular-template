import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { User } from '../../../../models/user.model';

import { FormResult, FormStatus } from '../../../../components/user-form/user-form.component';

@Component({
  selector: 'nat-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.scss']
})
export class UserDialogComponent {

  submit: Subject<void> = new Subject<void>();
  result: FormResult;
  formStatus = FormStatus;

  constructor(
    public dialogRef: MatDialogRef<UserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: User
  ) {}

  submitForm() {
    this.submit.next();
  }

  resultForm(result: FormResult) {
    this.result = result;

    if (this.result.status === this.formStatus.OK) {
      this.onClose(result);
    }

  }

  onClose(result: FormResult): void {
    this.dialogRef.close(result);
  }

}
