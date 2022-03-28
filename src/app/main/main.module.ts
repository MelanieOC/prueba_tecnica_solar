import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';

import { MaterialModule } from '../material/material.module';
import { ComponentsModule } from '../components/components.module';
import { PipesModule } from '../pipes/pipes.module';


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ComponentsModule,
    PipesModule
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }
