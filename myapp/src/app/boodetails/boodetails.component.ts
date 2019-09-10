import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../book';
import { BookserviceService } from '../bookservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-boodetails',
  templateUrl: './boodetails.component.html',
  styleUrls: ['./boodetails.component.css']
})
export class BoodetailsComponent implements OnInit {

  books: Observable<Book[]>;
  constructor(private bookserviceService: BookserviceService, private router: Router) { }

  ngOnInit() {
    this.books = this.bookserviceService.getbooks();
  }

  close() {
    this.router.navigate([{outlets: {bookList: null}}]);
  }
}
