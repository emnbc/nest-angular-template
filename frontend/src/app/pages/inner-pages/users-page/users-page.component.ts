import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { User } from '../../../models/user.model';
import { HttpHelperService, Param } from '../../../services/http-helper.service';
import { UserDialogComponent } from './user-dialog/user-dialog.component';
import { FormResult, FormStatus } from '../../../components/user-form/user-form.component';
import { AppService } from '../../../services/app.service';

@Component({
  selector: 'nat-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit {

  private destroyed$: ReplaySubject<boolean> = new ReplaySubject(1);

  users: User[] = [];
  loading: boolean = false;
  width: number;

  pagination: PageEvent = {
    length: 0,
    pageSize: 10,
    pageIndex: 0
  }

  get mobile() {
    return this.width <= 960;
  }

  get displayedColumns() {
    return this.mobile
      ? ['id','firstName', 'lastName']
      : ['id', 'username', 'firstName', 'lastName', 'email', 'birthDate'];
  }

  constructor(
    private http: HttpHelperService,
    private app: AppService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.app.width
      .pipe(takeUntil(this.destroyed$))
      .subscribe(width => this.width = width);
    this.getUsers();
  }

  openUserDialog() {
    const userDialogRef = this.dialog.open(UserDialogComponent, { width: 'calc(100% - 32px)', maxWidth: '500px' });

    userDialogRef.afterClosed().subscribe((result: FormResult) => {
      if (result && result.status === FormStatus.OK) {
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

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

}
