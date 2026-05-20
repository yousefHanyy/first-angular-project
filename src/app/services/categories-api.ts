import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICategory } from '../models/icategory';

@Injectable({
  providedIn: 'root',
})
export class CategoriesApi {
  apiUrl = `${environment.baseUrl}/categories`;
  httpClient = inject(HttpClient);

  getAllCategories(): Observable<ICategory[]> {
    return this.httpClient.get<ICategory[]>(this.apiUrl);
  }
}
