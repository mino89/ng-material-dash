import { User, UserList } from './user.model';
import { UsersService } from './users.service';
import { Component, OnInit } from '@angular/core';
import { BaseListComponent } from 'src/app/shared/uikit/base/list-base.component';

@Component({
  selector: 'dash-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent extends BaseListComponent {
  public type!: User
  constructor(
    dataFetch: UsersService) {
    super(dataFetch)
    this.columns = [
      'firstName', 'lastName', 'gender', 'height', 'weight', 'email', 'actions'
    ]
    this.names = [
      'nome', 'cognome', 'genere', 'altezza', 'peso', 'email', 'azioni'
    ]
    this.root = 'users'
  }
}
