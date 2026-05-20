import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { CoursesApi } from '../../services/courses-api';
import { CategoriesApi } from '../../services/categories-api';
import { ICourse } from '../../models/icourse.model';
import { ICategory } from '../../models/icategory';

@Component({
  selector: 'app-insert-course',
  imports: [FormsModule],
  templateUrl: './insert-course.html',
  styleUrl: './insert-course.css',
})
export class InsertCourse implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private coursesApiService = inject(CoursesApi);
  private categoriesApiService = inject(CategoriesApi);
  private cdr = inject(ChangeDetectorRef);

  isEditMode = false;
  isLoading = false;
  categories: ICategory[] = [];

  course: ICourse = {
    id: 0,
    title: '',
    instructor: '',
    price: 0,
    seats: 0,
    imgUrl: '',
    catId: 0,
  };

  ngOnInit(): void {
    this.categoriesApiService.getAllCategories().subscribe({
      next: (cats) => {
        this.categories = cats.filter(cat => Number(cat.id) !== 0);
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Failed to load categories', err);
      }
    });

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.isLoading = true;
      this.coursesApiService.getCourseById(id).subscribe({
        next: (crs) => {
          this.course = crs;
          this.isLoading = false;
          this.cdr.detectChanges();
        },
        error: (err) => {
          console.error('Failed to load course details', err);
          alert('Course not found.');
          this.isLoading = false;
          this.cdr.detectChanges();
          this.router.navigate(['/courses']);
        }
      });
    }
  }

  onSubmit(form: NgForm): void {
    if (form.invalid) return;

    if (this.isEditMode) {
      this.coursesApiService.updateCourse(String(this.course.id), this.course).subscribe({
        next: () => {
          alert('Course updated successfully!');
          this.router.navigate(['/courses']);
        },
        error: (err) => {
          console.error('Update failed', err);
          alert('Failed to update course.');
        }
      });
    } else {
      this.coursesApiService.addCourse(this.course).subscribe({
        next: () => {
          alert('Course inserted successfully!');
          this.router.navigate(['/courses']);
        },
        error: (err) => {
          console.error('Insertion failed', err);
          alert('Failed to insert course.');
        }
      });
    }
  }
}
