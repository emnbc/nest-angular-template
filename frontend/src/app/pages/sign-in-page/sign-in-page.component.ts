import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { HttpHelperService } from '../../services/http-helper.service';

@Component({
  selector: 'nat-sign-in',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.scss']
})
export class SignInPageComponent {

  loading: boolean = false;
  error: boolean = false;
  hide: boolean = true;

  authGroup = this.formBuilder.group({
    username: [null, {
      validators: [Validators.required, Validators.minLength(3)],
      updateOn: 'change'
    }],
    password: [null, {
      validators: [Validators.required, Validators.minLength(3)],
      updateOn: 'change'
    }],
  });

  constructor(
    private auth: AuthService,
    private http: HttpHelperService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) { }

  login() {
    this.error = false;
    if(this.authGroup.valid) {
      this.loading = true;
      this.http.login(this.authGroup.value).subscribe(res => {
        if(res.accessToken) {
          this.auth.setTokenToStorage(res.accessToken);
          this.router.navigate(['/']);
        } else {
          this.error = true;
        }
      }, () => {
        this.error = true;
        this.loading = false;
      });
    } else {
      this.authGroup.markAllAsTouched();
    }
  }

}