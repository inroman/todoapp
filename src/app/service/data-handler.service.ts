import { TestData } from './../data/TestData';
import { Category } from './../model/category';
import { Injectable } from '@angular/core';

import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  constructor() { }

  getCategories(): Category[] {
    return TestData.categories;
  }


}
