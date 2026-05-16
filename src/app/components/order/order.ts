import { Component, inject } from '@angular/core';
import { ICategory } from '../../models/icategory';
import { Courses } from '../courses/courses';
import { FormsModule } from '@angular/forms';
import { Categories } from '../../services/categories';

@Component({
  selector: 'app-order',
  imports: [Courses, FormsModule],
  templateUrl: './order.html',
  styleUrl: './order.css',
})
export class Order {
  selectedCatId: number = 0;
  coursePrice: number = 0;

  private catService = inject(Categories);
  categories: ICategory[] = this.catService.getAllCategories();

  setCoursePrice(receivedTotalPrice: number) {
    this.coursePrice = receivedTotalPrice;
  }
}
