import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  display = true ;

  books = [
    {id: 1, name: 'Asp.net', price: '25'},
    {id: 2, name: 'Java', price: '24'},
    {id: 3, name: 'Angular', price: '35'},
    {id: 4, name: 'SQL', price: '45'}
  ];
}
