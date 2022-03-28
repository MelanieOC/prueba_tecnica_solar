import { Component, Input } from '@angular/core';
import { Service } from '../../interfaces/type';

@Component({
  selector: 'app-new-element',
  templateUrl: './new-element.component.html'
})
export class NewElementComponent {
  view = 1
  @Input() type: number = 0

  newService: Service = {
    title: '',
    type_id: this.type,
    description: '',
    id: 0
  }

  ngOnChanges() {
    if (this.view == 2) {
      this.view = 1
    }
    this.newService = {
      title: '',
      type_id: this.type,
      description: '',
      id: 0
    }
  }
}
