import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';
import { CoursesApi } from '../../services/courses-api';
import { ICourse } from '../../models/icourse.model';

@Component({
  selector: 'app-details',
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details implements OnInit {
  private activateRoute = inject(ActivatedRoute);
  private coursesApiService = inject(CoursesApi);
  private cdr = inject(ChangeDetectorRef);

  id: string = '';
  course: ICourse | null = null;
  isLoading = false;

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id'];
    if (this.id) {
      this.isLoading = true;
      this.coursesApiService.getCourseById(this.id).subscribe({
        next: (crs) => {
          this.course = crs;
          this.isLoading = false;
          this.cdr.detectChanges();
        },
        error: (err) => {
          console.error('Failed to fetch course details', err);
          this.isLoading = false;
          this.cdr.detectChanges();
        },
      });
    }
  }
}
