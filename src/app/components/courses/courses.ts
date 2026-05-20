import {
  Component,
  effect,
  EventEmitter,
  inject,
  Input,
  OnChanges,
  OnInit,
  Output,
  signal,
  SimpleChanges,
} from '@angular/core';
import { ICourse } from '../../models/icourse.model';
import { AsyncPipe, CurrencyPipe, NgClass, NgStyle } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DisableAfterClick } from '../../directives/disable-after-click';
import { DiscountPipe } from '../../pipes/discount-pipe';
import { CoursesService } from '../../services/courses';
import { RouterLink } from '@angular/router';
import { CoursesApi } from '../../services/courses-api';

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
    AsyncPipe,
  ],
  templateUrl: './courses.html',
  styleUrl: './courses.css',
})
export class Courses implements OnInit, OnChanges {
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

  // courses: ICourse[] = this.coursesService.getAllCourses();
  // filteredCourses: ICourse[] = this.courses;

  courses = signal<ICourse[]>([]);
  filteredCourses = signal<ICourse[]>([]);
  private coursesApiService = inject(CoursesApi);

  //* Observables implementation:
  private coursesService = inject(CoursesService);
  courseStatus$ = this.coursesService.getCourseStatus();

  ngOnInit(): void {
    this.coursesApiService.getAllCourses().subscribe((res) => {
      this.courses.set(res);
      if (Number(this.receivedCatId) === 0) {
        this.filteredCourses.set(res);
      }
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['receivedCatId']) {
      const catId = this.receivedCatId;
      if (Number(catId) === 0) {
        const isFirst = changes['receivedCatId'].firstChange;
        if (!isFirst) {
          this.coursesApiService.getAllCourses().subscribe((res) => {
            this.filteredCourses.set(res);
          });
        }
      } else {
        this.coursesApiService.getCoursesByCategoryId(catId.toString()).subscribe((res) => {
          this.filteredCourses.set(res);
        });
      }
    }
  }

  deleteCourse(id: number): void {
    if (confirm('Are you sure you want to delete this course?')) {
      this.coursesApiService.deleteCourse(String(id)).subscribe({
        next: () => {
          this.courses.set(this.courses().filter((crs) => crs.id !== id));
          this.filteredCourses.set(this.filteredCourses().filter((crs) => crs.id !== id));
          alert('Course deleted successfully!');
        },
        error: (err) => {
          console.error('Delete failed', err);
          alert('Failed to delete course.');
        }
      });
    }
  }
}
