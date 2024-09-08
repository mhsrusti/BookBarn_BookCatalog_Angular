// Book interface for individual book objects
export interface Book {
  bookId: number;
  title: string;
  description: string;
  price: number;
  coverImageUrl: string; 
  averageRating: number;
  availableBookCount: number; 
  authorId: number; 
  authorName: string; 
  categoryId: number;
  categoryName: string;
}
  export interface BookResponse {
    totalBooks: number; // Total books for pagination
    books: Book[];  // List of books
  } 