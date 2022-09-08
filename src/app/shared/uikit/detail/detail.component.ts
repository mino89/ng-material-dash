import { BehaviorSubject } from 'rxjs';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'dash-detail-view',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
  private _model = new BehaviorSubject<any>({})
  private _data = new BehaviorSubject<any>({})
  formFields: any = []
  @Input() set data(value: any) {
    this._data.next(value)
  }
  get data() {
    return this._data.getValue()
  }
  @Input() set model(value: any) {
    this._model.next(value)
  }
  get model() {
    return this._model.getValue()
  }
  @Output() update: EventEmitter<any> = new EventEmitter();

  constructor() { }

  updateModel(item: any) {
    item.map((i: any) => {
      if(i.group?.length > 0){
        this.updateModel(i.group)
      }else{
        this.model[i.label] = i.value
      }
    })
    this.update.emit()
  }





}
