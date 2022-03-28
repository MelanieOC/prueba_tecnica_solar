import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';
import { Type } from '../interfaces/type';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})
export class MainComponent implements OnInit {

  get services() {
    return this.dbs.services;
  }

  types: Type[] = this.dbs.types

  typeSelect: number = 0

  constructor(private dbs: DatabaseService) { }

  ngOnInit(): void {
  }

}
