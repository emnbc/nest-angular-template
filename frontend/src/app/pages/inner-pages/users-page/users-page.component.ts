import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {animate, state, style, transition, trigger} from '@angular/animations';

import { User } from '../../../models/user.model';
import { HttpHelperService } from '../../../services/http-helper.service';
import { UserDialogComponent } from './user-dialog/user-dialog.component';
import { FormResult, FormStatus } from '../../../components/user-form/user-form.component';

@Component({
  selector: 'nat-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class UsersPageComponent implements OnInit {

  users: User[] = [];
  loading: boolean = false;
  expandedElement: User | null;

  constructor(
    private http: HttpHelperService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  openUserDialog() {
    const userDialogRef = this.dialog.open(UserDialogComponent, { width: 'calc(100% - 32px)', maxWidth: '500px' });

    userDialogRef.afterClosed().subscribe((result: FormResult) => {
      if (result.status === FormStatus.OK) {
        this.getUsers();
      }
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
  displayedColumnsTwo: string[] = ['username', 'firstName'];

}
