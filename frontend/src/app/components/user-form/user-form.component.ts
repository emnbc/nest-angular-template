import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { HttpHelperService } from '../../services/http-helper.service';

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  hide: boolean = true;
  loading: boolean = false;

  registerFormGroup: FormGroup = this.formBuilder.group({
    email: [null, [Validators.required, Validators.email]],
    firstName: [null, [Validators.required, Validators.minLength(3)]],
    lastName: [null, [Validators.required, Validators.minLength(3)]],
    password: [null, [Validators.required, Validators.minLength(3)]]
  });

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpHelperService
  ) { }

  ngOnInit(): void {
  }

  submitRegister() {
    if(this.registerFormGroup.valid) {
      this.loading = true;
      this.http.create('users', this.registerFormGroup.value).subscribe((res) => {
        // this.openSnackBar('Success!');
        setTimeout(() => {
          // this.router.navigate(['/sign-in']);
          this.loading = false;
        }, 1000);
      },(err) => {
        this.loading = false;
        // this.openSnackBar('Something went wrong!');
      });
    }
  }

}
