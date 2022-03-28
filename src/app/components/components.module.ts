import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';

import { CardComponent } from './card/card.component';
import { FormComponent } from './form/form.component';
import { NewElementComponent } from './new-element/new-element.component';

@NgModule({
  declarations: [
    CardComponent,
    FormComponent,
    NewElementComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    CardComponent,
    NewElementComponent
  ]
})
export class ComponentsModule { }
