import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { User } from '../../../models/user.model';
import { HttpHelperService } from '../../../services/http-helper.service';
import { UserDialogComponent } from './user-dialog/user-dialog.component';

@Component({
  selector: 'nat-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User[] = null;

  constructor(
    private http: HttpHelperService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.http.find<User[]>('users').subscribe(res => this.users = User.initArray(res.body));
  }

  openUserDialog() {
    const userDialogRef = this.dialog.open(UserDialogComponent);

    userDialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  displayedColumns: string[] = ['id', 'username', 'firstName', 'lastName', 'email', 'birthDate'];

}
