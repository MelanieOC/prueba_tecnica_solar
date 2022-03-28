import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatabaseService } from 'src/app/services/database.service';
import { Type, Service } from '../../interfaces/type';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {
  @Input() data: Service = {
    title: '',
    type_id: 0,
    description: '',
    id: 0
  }
  @Input() edit: boolean = false

  @Output() return = new EventEmitter<any>();

  types: Type[] = this.dbs.types

  title: string = 'Nuevo Servicio'

  myForm: FormGroup = this.formBuilder.group({
    title: [null, [Validators.required]],
    description: [null, Validators.required],
    type_id: [null, Validators.required],
    id: [null]
  });

  constructor(
    private formBuilder: FormBuilder,
    private dbs: DatabaseService
  ) { }

  ngOnInit(): void {
    this.myForm.setValue(this.data)
    if (this.edit) {
      this.title = 'Editar Servicio'
    }
  }

  save() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched()
      return;
    }

    if (this.edit) {
      this.dbs.editService(this.myForm.value);
    } else {
      this.dbs.addService(this.myForm.value);
    }

    this.cancel()
  }

  cancel() {
    this.return.emit(true)
  }

}
