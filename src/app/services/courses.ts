import { Injectable } from '@angular/core';
import { ICourse } from '../models/icourse.model';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  courses: ICourse[] = [
    {
      id: 1,
      title: 'HTML',
      instructor: 'Abdallah',
      price: 10,
      seats: 10,
      image: 'https://placehold.co/600x400',
      catId: 1,
    },
    {
      id: 2,
      title: 'CSS',
      instructor: 'Abdallah',
      price: 10,
      seats: 10,
      image: 'https://placehold.co/600x400',
      catId: 2,
    },
    {
      id: 3,
      title: 'JS',
      instructor: 'Nadia',
      price: 10,
      seats: 10,
      image: 'https://placehold.co/600x400',
      catId: 3,
    },
    {
      id: 4,
      title: 'React',
      instructor: 'Ahmed',
      price: 10,
      seats: 10,
      image: 'https://placehold.co/600x400',
      catId: 4,
    },
    {
      id: 5,
      title: 'Angular',
      instructor: 'Mona',
      price: 10,
      seats: 10,
      image: 'https://placehold.co/600x400',
      catId: 5,
    },
  ];
  filteredCourses = this.courses;

  getAllCourses(): ICourse[] {
    return this.courses;
  }

  getCoursesByCatId(catId: number): ICourse[] {
    if (catId == 0) {
      return this.courses;
    }
    return (this.filteredCourses = this.courses.filter((crs) => crs.catId == catId));
  }

  getCourseById(id: number): ICourse | null {
    let crs = this.courses.find((crs) => crs.id == id);
    return crs ? crs : null;
  }
}
