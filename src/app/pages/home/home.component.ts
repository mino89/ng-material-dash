import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/data-fetch/data.service';
import { UserList, User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'dash-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data: User[] | undefined
  columns: string[] = [
    'firstName','lastName','gender', 'height', 'weight', 'email', 'actions'
  ]
  names: string[] = [
    'nome', 'cognome', 'genere', 'altezza', 'peso', 'email', 'azioni'
  ]
  constructor(public dataFetch: DataService) { }

  ngOnInit() {
    this.dataFetch.getList(30).subscribe((res: UserList) => {
      this.data = res.users
    })
  }
}
