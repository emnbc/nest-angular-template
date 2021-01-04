import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
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

  @Input() user?: User;
  @Input() submit: Subject<void> = new Subject<void>();
  @Output() result: EventEmitter<FormResult> = new EventEmitter<FormResult>();

  userFormGroup: FormGroup;
  hide: boolean = true;

  get isEdit() {
    return !!this.user?.id;
  }

  constructor(
    private fb: FormBuilder,
    private http: HttpHelperService
  ) {
    this.userFormGroup = this.fb.group({
      firstName: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      lastName: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      username: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      email: [null, [Validators.required, Validators.email, Validators.maxLength(30)]],
      password: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      birthDate: [null, [Validators.required]]
    });
  }

  ngOnInit() {
    this.submit.subscribe(() => this.isEdit ? this.submitUpdate() : this.submitRegister());
    if (this.user) {
      const {id, registerDate, ...other} = this.user;
      this.userFormGroup.setControl('username', new FormControl({value: this.user.username, disabled: true}));
      this.userFormGroup.setValue(other);
      this.userFormGroup.removeControl('password'); // TO DO
    }
  }

  submitRegister() {
    if(this.userFormGroup.valid) {
      this.result.emit({status: FormStatus.SENDING, result: null});

      this.http.create('users', this.userFormGroup.value).subscribe((res) => {
        setTimeout(() => { // fake delay
          this.result.emit({status: FormStatus.OK, result: res});
        }, 300);
      }, () => {
        setTimeout(() => { // fake delay
          this.result.emit({status: FormStatus.ERROR, result: null});
        }, 300);
      });

    } else {
      this.userFormGroup.markAllAsTouched();
    }
  }

  submitUpdate() {
    if(this.userFormGroup.valid) {
      this.result.emit({status: FormStatus.SENDING, result: null});

      this.http.update('users', this.user.id, this.userFormGroup.value).subscribe((res) => {
        setTimeout(() => { // fake delay
          this.result.emit({status: FormStatus.OK, result: res});
        }, 300);
      }, () => {
        setTimeout(() => { // fake delay
          this.result.emit({status: FormStatus.ERROR, result: null});
        }, 300);
      });

    } else {
      this.userFormGroup.markAllAsTouched();
    }
  }

}
