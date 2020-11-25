import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Subject } from 'rxjs';

import { HttpHelperService } from '../../services/http-helper.service';

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  @Input() default?: any;
  @Input() submit: Subject<void> = new Subject<void>();
  @Output() result: EventEmitter<any> = new EventEmitter<any>();
  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();

  hide: boolean = true;

  userFormGroup: FormGroup = this.formBuilder.group({
    firstName: [null, [Validators.required, Validators.minLength(3)]],
    lastName: [null, [Validators.required, Validators.minLength(3)]],
    username: [null, [Validators.required, Validators.minLength(3)]],
    email: [null, [Validators.required, Validators.email]],
    password: [null, [Validators.required, Validators.minLength(3)]],
    birthDate: [null, [Validators.required, Validators.minLength(3)]]
  });

  // "firstName": "John",
	// "lastName": "Dragovich",
	// "username": "demo",
	// "email": "demo@demo.com",
	// "password": "demo",
	// "birthDate": "1982-11-26"

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpHelperService
  ) { }

  ngOnInit() {
    this.submit.subscribe(() => this.submitRegister());
  }

  submitRegister() {
    if(this.userFormGroup.valid) {
      this.loading.emit(true); // thinking about one method for loading and result
      this.http.create('users/fake', this.userFormGroup.value).subscribe((res) => {
        setTimeout(() => { // fake delay
          this.loading.emit(false);
          this.result.emit({status: 'OK', result: res});
        }, 1000);
      }, () => {
        setTimeout(() => { // fake delay
          this.loading.emit(false);
          this.result.emit({status: 'ERROR', result: null});
        }, 1000);
      });
    } else {
      this.userFormGroup.markAllAsTouched();
    }
  }

}
