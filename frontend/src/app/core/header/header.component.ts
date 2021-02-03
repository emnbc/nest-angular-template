import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { AppService } from '../../services/app.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'nat-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  user: User = new User();
  showMenu: boolean;
  width: number;

  constructor(
    private router: Router,
    private auth: AuthService,
    private app: AppService
  ) {
    this.auth.user.subscribe(user => this.user = user);
    this.app.showMenu.subscribe(showMenu => this.showMenu = showMenu);
    this.app.width.subscribe(width => this.width = width);
  }

  logOut() {
    this.auth.logOut();
    this.router.navigate(['/welcome']);
  }

  goToProfile() {
    this.router.navigate(['/profile']);
  }

  goToHome() {
    this.router.navigate(['/home']);
  }

  menuSwitch() {
    this.app.menuSwicher.next();
  }

  get mobile() {
    return this.width <= 960;
  }

}
