import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { ICourse } from '../../models/icourse.model';
import { CurrencyPipe, NgClass, NgStyle } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DisableAfterClick } from '../../directives/disable-after-click';
import { DiscountPipe } from '../../pipes/discount-pipe';
import { CoursesService } from '../../services/courses';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-courses',
  imports: [
    NgClass,
    FormsModule,
    NgStyle,
    DisableAfterClick,
    DiscountPipe,
    CurrencyPipe,
    RouterLink,
  ],
  templateUrl: './courses.html',
  styleUrl: './courses.css',
})
export class Courses {
  @Input('sentSelectedCategoryId') receivedCatId: number = 0;

  discountValue: number = 20;

  decreaseSeats(course: ICourse) {
    if (course.seats > 0) {
      course.seats--;
    }
  }

  @Output() onRegisterPriceChanged: EventEmitter<number> = new EventEmitter<number>();

  totalPrice: number = 0;
  registerPrice(price: number) {
    this.totalPrice += price - price * (this.discountValue / 100);
    this.onRegisterPriceChanged.emit(this.totalPrice);
  }

  private coursesService = inject(CoursesService);
  courses: ICourse[] = this.coursesService.getAllCourses();
  filteredCourses: ICourse[] = this.courses;

  ngOnChanges(changes: SimpleChanges): void {
    this.filteredCourses = this.coursesService.getCoursesByCatId(this.receivedCatId);
  }
}
