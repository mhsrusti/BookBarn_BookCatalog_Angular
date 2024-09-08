import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Book, BookResponse } from '../../Models/IBook';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }
  apiUrl='https://localhost:44374/api/Books'; 
  httpClient=inject(HttpClient);

  getBooks(page: number = 1, pageSize: number = 10): Observable<BookResponse> 
  {
    return this.httpClient.get<BookResponse>(`${this.apiUrl}?PageNumber=${page}&PageSize=${pageSize}`);
  }

  getBookById(id: number): Observable<Book> 
  {
    return this.httpClient.get<Book>(`${this.apiUrl}/${id}`);
  }

  // Method to add a new book
  addBook(newBook: Book): Observable<Book> {
    return this.httpClient.post<Book>(`${this.apiUrl}/add`, newBook);
  }

  searchBooks(query: string): Observable<{ books: Book[], totalBooks: number }> {
    return this.httpClient.get<{ books: Book[], totalBooks: number }>(`${this.apiUrl}/search?query=${query}`);
  }

   // Fetch books with category filter
   filterBooksByCategory(categoryId: number, pageNumber: number = 1, pageSize: number = 10): Observable<BookResponse> {
    const params = new HttpParams()
      .set('Id', categoryId.toString())
      .set('pageNumber', pageNumber.toString())
      .set('pageSize', pageSize.toString());

    return this.httpClient.get<BookResponse>(`${this.apiUrl}/category`, { params });
  }


  // getBooks(page: number = 1, pageSize: number = 10): Observable<Book[]> {
  //   return this.httpClient.get<Book[]>(`${this.apiUrl}?PageNumber=${page}&PageSize=${pageSize}`);
  // }

  // getBookById(id: number): Observable<Book> {
  //   return this.httpClient.get<Book>(`${this.apiUrl}/books/${id}`);
  // }

  // searchBooks(query: string): Observable<Book[]> {
  //   return this.httpClient.get<Book[]>(`${this.apiUrl}/books?title_like=${query}`);
  // }

  // filterBooksByCategory(categoryId: number): Observable<Book[]> {
  //   return this.httpClient.get<Book[]>(`${this.apiUrl}/books?categoryId=${categoryId}`);
  // }
}
