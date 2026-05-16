import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { inject } from '@angular/core';
import { CoursesService } from '../../services/courses';
import { ICourse } from '../../models/icourse.model';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details implements OnInit {
  private activateRoute = inject(ActivatedRoute);
  private courseService: CoursesService = inject(CoursesService);

  id: number = 0;
  course: ICourse | null = null;

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id'];
    this.course = this.courseService.getCourseById(this.id);
  }
}
