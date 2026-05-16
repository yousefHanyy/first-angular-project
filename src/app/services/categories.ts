import { Injectable } from '@angular/core';
import { ICategory } from '../models/icategory';
@Injectable({
  providedIn: 'root',
})
export class Categories {
  categories: ICategory[] = [
    {
      id: 0,
      name: 'All',
    },
    {
      id: 1,
      name: 'Programming',
    },
    {
      id: 2,
      name: 'Design',
    },
    {
      id: 3,
      name: 'Marketing',
    },
    {
      id: 4,
      name: 'Buisness',
    },
  ];

  getAllCategories(): ICategory[] {
    return this.categories;
  }
}
