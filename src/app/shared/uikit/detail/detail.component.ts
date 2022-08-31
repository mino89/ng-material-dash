import { BehaviorSubject } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'dash-detail-view',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  private _data = new BehaviorSubject<any>({})
  formFields: any = []
  @Input() set data(value: any) {
    this._data.next(value)
  }
  get data() {
    return this._data.getValue()
  }
  constructor() { }

  buildForm(data: any) {
    if (data)
      Object.entries(data).forEach(val => {
        if (typeof val[1] === 'object') {
          this.buildForm(val[1])
        } else {
          const obj = {
            label: val[0],
            value: val[1]
          }
          this.formFields.push(obj)
        }

      })
  }

  ngOnInit(): void {
    this._data.subscribe(x => {
      this.buildForm(x);
      console.log(this.formFields)
    })

  }


}
