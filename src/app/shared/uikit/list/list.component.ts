import { MatTableDataSource } from '@angular/material/table';
import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'dash-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() data!: any[] 
  @Input() columns: string[] | undefined
  @Input() names!: string[]
  @Input() sizes: number[] = [20, 40]
  @Input() goToDetail: boolean = false
  dataSource = new MatTableDataSource<any>()
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('content', {read: ElementRef, static: true}) content : ElementRef | undefined
  constructor() { }

  ngOnInit(): void {
    this.dataSource.data = this.data
    console.log(this.content)
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator
    console.log(this.content)
   }

   getColumnName(name:string){
    return `[${name}]`
   }

}
