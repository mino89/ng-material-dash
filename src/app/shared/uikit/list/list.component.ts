import { MatTableDataSource } from '@angular/material/table';
import { User } from './../../models/user.model';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'dash-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() data!: User[] 
  @Input() columns: string[] | undefined
  @Input() names!: string[]
  @Input() sizes: number[] = [20, 40]
  @Input() goToDetail: boolean = false
  dataSource = new MatTableDataSource<User>()
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() { }

  ngOnInit(): void {
    this.dataSource.data = this.data
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator
 
   }

}