import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';
import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { User } from '../../../models/user.model';
import { HttpHelperService, Params } from '../../../services/http-helper.service';
import { UserDialogComponent } from './user-dialog/user-dialog.component';
import { FormResult, FormStatus } from '../../../components/user-registration/user-registration.component';
import { AppService } from '../../../services/app.service';


const DIALOG_CONFIG = { width: 'calc(100% - 32px)', maxWidth: '500px' };

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
  dialogConfig = DIALOG_CONFIG;

  pagination: PageEvent = {
    length: 0,
    pageSize: 10,
    pageIndex: 0
  }

  sort: Sort = {
    direction: 'asc',
    active: 'id'
  };

  get mobile() {
    return this.width <= 960;
  }

  get displayedColumns() {
    return this.mobile
      ? ['id','firstName', 'lastName', 'edit']
      : ['id', 'username', 'firstName', 'lastName', 'email', 'birthDate', 'edit'];
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

  openCreateUserDialog() {
    const userDialogRef = this.dialog.open(UserDialogComponent, this.dialogConfig);

    userDialogRef.afterClosed().subscribe((result: FormResult) => {
      if (result && result.status === FormStatus.OK) {
        this.getUsers();
      }
    });
  }

  openEditUserDialog(user: User) {
    const userDialogRef = this.dialog.open(UserDialogComponent, { ...this.dialogConfig, data: new User(user) });

    userDialogRef.afterClosed().subscribe((result: FormResult) => {
      if (result && result.status === FormStatus.OK) {
        this.getUsers();
      }
    });
  }

  getUsers() {
    this.loading = true;

    const params: Params = {
      size: this.pagination.pageSize,
      page: this.pagination.pageIndex + 1,
      ...this.sort.direction && {sort: this.sort.active + ',' + this.sort.direction}
    };

    this.http.find<User[]>('users', params).subscribe(res => {
      setTimeout(() => {
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

  changeSort(sort: Sort) {
    this.sort = sort;
    this.getUsers();
  }

  async downloadUsersList() {
      this.http.download('users/download/run').subscribe((response: any) => {

        const blob = new Blob([response], {type : 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
        const url = window.URL.createObjectURL(blob);
        const link: any = document.createElement('a');
        link.href = url;
  
        let fileName = 'users';
  
        link.setAttribute('download', fileName);
  
        document.body.appendChild(link);
        link.click();
        link.remove();
        window.URL.revokeObjectURL(url);

      });
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.complete();
  }

}
