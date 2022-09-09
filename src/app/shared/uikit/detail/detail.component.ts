import { BehaviorSubject } from 'rxjs';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'dash-detail-view',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailComponent {
  private _model = new BehaviorSubject<any>({})
  private _data = new BehaviorSubject<any>({})
  @Input() route?: string
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
  @Output() delete: EventEmitter<any> = new EventEmitter();
  @Output() create: EventEmitter<any> = new EventEmitter();
  constructor() { }

  rebuildModel(data = this.data, model = this.model) {
    data.map((i: any) => {
      if (typeof i.group === 'object') {
        this.rebuildModel(i.group, model[i.label])
      } else {
        model[i.label] = i.value
      }
    })
  }

  updateModel() {
    this.rebuildModel()
    this.update.emit()
  }

  deleteModel() {
    this.delete.emit()
  }

  createModel() {
    this.rebuildModel()
    this.create.emit()
  }

}
