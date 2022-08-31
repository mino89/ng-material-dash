import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/data-fetch/data.service';
import { User, UserList } from 'src/app/shared/models/user.model';

@Component({
  selector: 'dash-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  data: User[] | undefined
  columns: string[] = [
    'firstName','lastName','gender', 'height', 'weight', 'email', 'actions'
  ]
  names: string[] = [
    'nome', 'cognome', 'genere', 'altezza', 'peso', 'email', 'azioni'
  ]
  constructor(public dataFetch: DataService) { }

  ngOnInit() {
    this.dataFetch.getList(100).subscribe((res: UserList) => {
      this.data = res.users
    })
  }

}
