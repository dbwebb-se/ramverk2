import { Component } from '@angular/core';
import { QuoteService } from './quote.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ QuoteService ],
})
export class AppComponent {
  message = 'No message yet!';
  author = null;
  visibleButton = true;

  constructor(private quoteService: QuoteService) {}

  fetchQuote() {
    this.quoteService.fetchQuote()
      .subscribe((data) => {
        this.message = "message";
        this.author = "author";
      });

    this.visibleButton = false;
  }
}
