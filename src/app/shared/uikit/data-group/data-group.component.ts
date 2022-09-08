import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'dash-data-group',
  templateUrl: './data-group.component.html',
  styleUrls: ['./data-group.component.scss']
})
export class DataGroupComponent {

  private _data = new BehaviorSubject<any>({})
  fields: any = {}
  @Input() set data(value: any) {
    this._data.next(value)
  }
  get data() {
    return this._data.getValue()
  }


  constructor() { }
  createField(field: any) {
    if (!(field.label in this.fields)) {
      switch (field.type) {
        case 'text':
          this.fields[field.label] = new FormControl('', [Validators.required])
          break;
        case 'number':
          this.fields[field.label] = new FormControl('', [Validators.required])
          break;
        case 'tel':
          this.fields[field.label] = new FormControl('', [Validators.required])
          break;
        case 'email':
          this.fields[field.label] = new FormControl('', [Validators.email, Validators.email])
          break;
      }
    }
    this.fields[field.label].value = field.value
    return this.fields[field.label];
  }

  change(event: any) {
    const name = this.data.findIndex((x: any) => x.label === event.target.name)
    this.data[name].value = event.target.value
  }
}
