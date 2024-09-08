import { Component, inject, OnInit } from '@angular/core';
import { Book } from '../../Models/IBook';
import { BookService } from '../../Services/book/book.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-detail.component.html',
  styleUrl: './book-detail.component.css'
})
export class BookDetailComponent implements OnInit {
  book: Book | null = null;
  errorMessage: string = '';
  private bookService = inject(BookService);
  private router=inject(Router)
  private route = inject(ActivatedRoute);

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const bookId = Number(params.get('id'));
      this.loadBook(bookId);
    });
  }

  loadBook(id: number): void {
    this.bookService.getBookById(id).subscribe({
      next: (book: Book) => this.book = book,
      error: (error) => this.errorMessage = `Error: ${error.status} - ${error.statusText || 'Unknown error'}`,
    });
  }

  goBack(): void {
    this.router.navigate(['/books']);
  }
}