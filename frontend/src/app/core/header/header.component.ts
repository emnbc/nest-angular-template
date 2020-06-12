import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { AppService } from '../../services/app.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  user: User = new User();

  constructor(
    private router: Router,
    private auth: AuthService,
    private app: AppService
  ) {
    this.auth.user$.subscribe(user => this.user = user);
  }

  logOut() {
    this.auth.logOut();
    this.router.navigate(['/welcome']);
  }

  menuSwitch() {
    this.app.menuSwicher.next();
  }

}
