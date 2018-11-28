import { Component } from '@angular/core';
import { Quote, QuoteService } from './quote.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ QuoteService ],
})
export class AppComponent {
  message = 'No message yet!';
  quote = null;
  visibleButton = true;

  constructor(private quoteService: QuoteService) {}

  fetchQuote() {
    this.quoteService.fetchQuote()
      .subscribe((data: Quote) => this.quote = {
        quote: data['quote'],
        author:  data['author']
      });

    this.visibleButton = false;
  }
}
