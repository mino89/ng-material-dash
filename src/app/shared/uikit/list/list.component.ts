import { MatTableDataSource } from '@angular/material/table';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'dash-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent<T> implements OnInit {
  @Input() type?: T
  @Input() data: T[] = []
  @Input() columns: string[] | undefined
  @Input() names!: string[]
  @Input() sizes: number[] = [20, 40]
  @Input() goToDetail: boolean = false
  dataSource = new MatTableDataSource<T>()
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() { }

  ngOnInit(): void {
    this.dataSource.data = this.data
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator
 
   }

}
