import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { FormResult, FormStatus } from '../../components/user-registration/user-registration.component';

@Component({
  selector: 'nat-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent {

  submit = new Subject<void>();

  result: FormResult;
  formStatus = FormStatus;

  constructor(private router: Router) { }

  submitForm() {
    this.submit.next();
  }

  resultForm(result: FormResult) {
    this.result = result;
    if (this.result.status === FormStatus.OK) {
      this.router.navigate(['/sign-in']);
    }
  }

}
