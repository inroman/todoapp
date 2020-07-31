import { TestData } from './../data/TestData';
import { Task } from './../model/task';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataZadService {

  constructor() { }

getTasks(): Task[]{
  return TestData.tasks;
}
}
