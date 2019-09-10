import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { BoodetailsComponent } from './boodetails/boodetails.component';
import { BookserviceService } from './bookservice.service';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BoodetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [BookserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
