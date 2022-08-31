import { User } from './../../../shared/models/user.model';
import { DataService } from './../../../shared/data-fetch/data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'dash-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  data!: User
  constructor( 
    private dataFetch: DataService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe(res =>{
      this.dataFetch.getDetail(res['id']).subscribe(res =>{
        this.data = res
        console.log(res)
      })
    })
  }

}
