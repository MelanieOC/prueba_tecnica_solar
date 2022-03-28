import { Component, Input } from '@angular/core';
import { Service } from 'src/app/interfaces/type';
import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html'
})
export class CardComponent {
  @Input() data: Service = {
    id: 0,
    type_id: 0,
    title: '',
    description: ''
  }

  edit = false

  constructor(
    private dbs: DatabaseService
  ) { }

  delete() {
    this.dbs.deleteService(this.data)
  }

}
