import { User, UserList } from './shared/models/user.model';
import { DataService } from './shared/data-fetch/data.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'material-dashboard';
  constructor(public dataFetch: DataService) { }

  ngOnInit() {
   this.dataFetch.getList().subscribe((res:UserList) =>{
      console.log(res)
   })
   this.dataFetch.getDetail(2).subscribe((res:User) =>{
    console.log(res)
 })
  }
}
