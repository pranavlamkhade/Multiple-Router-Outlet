import { Injectable } from '@angular/core';
import { Book } from './book';
import { Observable, of } from 'rxjs';

const BOOKS: Book[] = [
  {id: 1, name: 'Angular', author: 'A.B.Kale', state: 'Maharastra'},
  {id: 2, name: 'Css', author: 'S.K.Singal', state: 'Asam'},
  {id: 3, name: 'JavaScript', author: 'M.P.Patvrdhan', state: 'Udisa'},
  {id: 4, name: 'HTML', author: 'U.J.Akbar', state: 'Himavhal'},
  {id: 5, name: 'Bootstrap', author: 'S.J.pathan', state: 'Kashmir'},
];
let booksobservable = of(BOOKS);
@Injectable({
  providedIn: 'root'
})
export class BookserviceService {
getbooks(): Observable<Book[]> {
  return booksobservable;
}
  constructor() { }
}
