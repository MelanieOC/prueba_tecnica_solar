import { Injectable } from '@angular/core';
import { Service, Type } from '../interfaces/type';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  public types: Type[] = [
    { name: 'Autos', id: 1 },
    { name: 'Salud', id: 2 },
    { name: 'Hogar', id: 3 },
  ]

  private _services: Service[] = [
    {
      id: 1,
      type_id: 3,
      title: 'Electricidad',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
    },
    {
      id: 2,
      type_id: 1,
      title: 'Auxilio Mecánico',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
    },
    {
      id: 3,
      type_id: 1,
      title: 'Chofer Reemplazo',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
    },
    {
      id: 4,
      type_id: 2,
      title: 'Médico a domicilio',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
    },
    {
      id: 5,
      type_id: 2,
      title: 'Ambulancia',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
    },
    {
      id: 6,
      type_id: 3,
      title: 'Gasfitero',
      description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
    }
  ];

  private idCount: number = 7

  get services(): Service[] {
    return [...this._services];
  }

  constructor() { }

  addService(service: Service) {
    service.title.trim()
    service.id = this.idCount
    this.idCount++
    this._services.push(service);
  }

  editService(service: Service) {
    const index = this.services.findIndex(sr => sr.id == service.id)
    this._services[index] = service;
  }

  deleteService(service: Service) {
    const index = this.services.findIndex(sr => sr.id == service.id)
    this._services.splice(index, 1);
  }

  findName(title: string): boolean {
    return !!this._services.find(sr => sr.title.toLowerCase() == title)
  }
}
