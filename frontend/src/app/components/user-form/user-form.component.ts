import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Subject } from 'rxjs';
import { User } from '../../models/user.model';

import { HttpHelperService } from '../../services/http-helper.service';

export enum FormStatus {
  SENDING = 'SENDING',
  OK = 'OK',
  ERROR = 'ERROR'
}

export interface FormResult {
  status: FormStatus;
  result: User;
}

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  @Input() default?: any;
  @Input() submit: Subject<void> = new Subject<void>();
  @Output() result: EventEmitter<FormResult> = new EventEmitter<FormResult>();

  hide: boolean = true;

  userFormGroup: FormGroup = this.formBuilder.group({
    firstName: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
    lastName: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
    username: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
    email: [null, [Validators.required, Validators.email, Validators.maxLength(30)]],
    password: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
    birthDate: [null, [Validators.required]]
  });

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpHelperService
  ) { }

  ngOnInit() {
    this.submit.subscribe(() => this.submitRegister());
  }

  submitRegister() {
    if(this.userFormGroup.valid) {
      this.result.emit({status: FormStatus.SENDING, result: null});

      this.http.create('users', this.userFormGroup.value).subscribe((res) => {
        setTimeout(() => { // fake delay
          this.result.emit({status: FormStatus.OK, result: res});
        }, 1000);
      }, () => {
        setTimeout(() => { // fake delay
          this.result.emit({status: FormStatus.ERROR, result: null});
        }, 1000);
      });

    } else {
      this.userFormGroup.markAllAsTouched();
    }
  }

}
