import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Category } from '../../Models/ICategory';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }
  apiUrl='https://localhost:44374/api/Books'
  httplient=inject(HttpClient)

  getCategories(): Observable<Category[]> 
  {
    return this.httplient.get<Category[]>(`${this.apiUrl}/category/1?PageNumber=1&PageSize=1`);
  }
}