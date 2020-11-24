import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'nat-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.scss']
})
export class UserDialogComponent {

  loading: boolean = false;
  submit: Subject<void> = new Subject<void>();

  submitForm() {
    this.submit.next();
  }

  loadingForm(loading: boolean) {
    this.loading = loading;
  }

  resultForm(result: any) {
    console.log("Result in dialog", result);
  }

}
