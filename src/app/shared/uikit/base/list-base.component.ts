import { Component, OnInit } from "@angular/core";
import { DataService } from "../../data-fetch/data.service";

@Component({
    template: ''
})
export class BaseListComponent implements OnInit{
  public data: any[] | undefined
  public columns: string[] = []
  public names: string[] = []
  constructor(public dataFetch: DataService) {

   }

  ngOnInit() {
    this.dataFetch.getList(100).subscribe((res: any) => {
      this.data = res.users
    })
  }
}
