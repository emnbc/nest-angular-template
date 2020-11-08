import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'nat-welcome',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent {

constructor(private router: Router) { }

  toSignIn() {
    this.router.navigate(['sign-in']);
  }

}
