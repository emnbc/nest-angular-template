import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { User } from '../../../models/user.model';
import { HttpHelperService } from '../../../services/http-helper.service';
import { UserDialogComponent } from './user-dialog/user-dialog.component';

@Component({
  selector: 'nat-users',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit {

  users: User[] = [];
  loading: boolean = false;

  constructor(
    private http: HttpHelperService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  openUserDialog() {
    const userDialogRef = this.dialog.open(UserDialogComponent, { width: '500px' });

    userDialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  getUsers() {
    this.loading = true;
    this.http.find<User[]>('users').subscribe(res => {
      setTimeout(() => { // fake delay  ¯\_(ツ)_/¯
        this.users = User.initArray(res.body);
        this.loading = false;
      }, 500)
    }, () => {
      this.loading = false;
    });
  }

  displayedColumns: string[] = ['id', 'username', 'firstName', 'lastName', 'email', 'birthDate'];

}
