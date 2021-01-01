import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';

import { User } from '../../../models/user.model';
import { HttpHelperService, Param } from '../../../services/http-helper.service';
import { UserDialogComponent } from './user-dialog/user-dialog.component';
import { FormResult, FormStatus } from '../../../components/user-form/user-form.component';

@Component({
  selector: 'nat-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit {

  users: User[] = [];
  loading: boolean = false;

  pagination: PageEvent = {
    length: 0,
    pageSize: 10,
    pageIndex: 0
  }

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

    const params: Param[] = [
      {key: 'size', value: this.pagination.pageSize},
      {key: 'page', value: this.pagination.pageIndex + 1}
    ]

    this.http.find<User[]>('users', params).subscribe(res => {
      setTimeout(() => { // fake delay  ¯\_(ツ)_/¯
        this.users = User.initArray(res.body);
        this.pagination.length = +res.headers.get('x-total-count');
        this.loading = false;
      }, 200)
    }, () => {
      this.loading = false;
    });
  }

  changePage(page: PageEvent) {
    this.pagination = page;
    this.getUsers();
  }

  displayedColumns: string[] = ['id', 'username', 'firstName', 'lastName', 'email', 'birthDate'];

}
