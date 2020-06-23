import { Component, OnInit } from '@angular/core';

import { User } from '../../../models/user.model';
import { HttpHelperService } from '../../../services/http-helper.service';

@Component({
  selector: 'nat-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: User[] = null;

  constructor(private http: HttpHelperService) { }

  ngOnInit(): void {
    this.http.find<User[]>('users').subscribe(res => this.users = User.initArray(res.body));
  }

  displayedColumns: string[] = ['id', 'username', 'firstName', 'lastName'];

}
