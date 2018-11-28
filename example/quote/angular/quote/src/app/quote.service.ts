import {Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

export interface Quote {
  quote: string;
  author: string;
}

@Injectable()
export class QuoteService {
  constructor(private http: HttpClient) { }

  fetchQuote(){
    return this.http
      .get<Quote>("http://quotes.rest/qod.json");
  }
}
