import { Routes } from '@angular/router';
import { BookListComponent } from './Book/book-list/book-list.component';
import { BookDetailComponent } from './Book/book-detail/book-detail.component';
import { AddBookComponent } from './Book/add-book/add-book.component';

export const routes: Routes = [
    { path: 'books', component: BookListComponent,title:"Books" },
    { path: 'books/:id', component: BookDetailComponent,title:"BookDetails" },
    { path: 'books/add-book', component: AddBookComponent }, 
    { path: '', redirectTo: '/books', pathMatch: 'full' },
    { path: '**', component: BookListComponent,title:"404" },
];
