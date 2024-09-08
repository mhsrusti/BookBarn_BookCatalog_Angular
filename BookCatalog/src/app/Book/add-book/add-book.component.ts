import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BookService } from '../../Services/book/book.service';
import { Book } from '../../Models/IBook';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './add-book.component.html',
  styleUrl: './add-book.component.css'
})
export class AddBookComponent implements OnInit {
  bookForm!: FormGroup;
  showAddBookForm: boolean = false;

  constructor(private fb: FormBuilder, private bookService: BookService) {}

  ngOnInit(): void {
    this.bookForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(1)]],
      rating: ['', [Validators.required, Validators.min(1), Validators.max(5)]],
    });
  }

  addBook() {
    this.showAddBookForm = true;
  }

  submitBookForm(): void {
    if (this.bookForm.valid) {
      const newBook: Book = this.bookForm.value;

      // Call the service to add the book
      this.bookService.addBook(newBook).subscribe({
        next: (response) => {
          console.log('Book added successfully:', response);
          // Handle the UI after book is added (e.g., reload the list or hide the form)
          this.showAddBookForm = false;
        },
        error: (error) => {
          console.error('Error adding book:', error);
        }
      });
    }
  }
}
