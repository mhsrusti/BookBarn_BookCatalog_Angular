import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BookListComponent } from './Book/book-list/book-list.component';
import { BookDetailComponent } from './Book/book-detail/book-detail.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,BookListComponent,BookDetailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'BookCatalog';
}
