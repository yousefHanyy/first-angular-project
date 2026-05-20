import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICourse } from '../models/icourse.model';

@Injectable({
  providedIn: 'root',
})
export class CoursesApi {
  apiUrl = `${environment.baseUrl}/courses`;
  httpClient = inject(HttpClient);

  getAllCourses(): Observable<ICourse[]> {
    return this.httpClient.get<ICourse[]>(this.apiUrl);
  }

  getCourseById(id: string): Observable<ICourse> {
    return this.httpClient.get<ICourse>(`${this.apiUrl}/${id}`);
  }

  getCoursesByCategoryId(catId: String): Observable<ICourse[]> {
    return this.httpClient.get<ICourse[]>(`${this.apiUrl}?catId=${catId}`);
  }

  addCourse(crs: ICourse): Observable<ICourse> {
    return this.httpClient.post<ICourse>(this.apiUrl, JSON.stringify(crs), {
      headers: {
        'content-type': 'application/json',
      },
    });
  }

  updateCourse(id: string, crs: ICourse): Observable<ICourse> {
    return this.httpClient.put<ICourse>(`${this.apiUrl}/${id}`, JSON.stringify(crs), {
      headers: {
        'content-type': 'application/json',
      },
    });
  }

  deleteCourse(id: string): Observable<any> {
    return this.httpClient.delete<any>(`${this.apiUrl}/${id}`);
  }
}
