import { Component, Input, OnInit } from '@angular/core';
import { Route } from '@angular/router';

@Component({
  selector: 'dash-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss']
})
export class NavItemComponent implements OnInit {
  @Input() data!: any 

  linktree: any  = {}
  constructor() { }

  buildLinkTree(data:Route){
    console.log(data)
    // data._loadedRoutes.forEach((value:any) => {
    //   console.log(value)
    // })
  }

  ngOnInit(): void {
    this.buildLinkTree(this.data)
  }

}
