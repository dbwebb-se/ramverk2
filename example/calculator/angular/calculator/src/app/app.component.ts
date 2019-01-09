import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculator';

  current = 0;
  decimals = null;
  previous = 0;
  operator = null;
  operatorClicked = false;

  clear() {
      this.current = 0;
  }

  sign() {
      this.current = -this.current;
  }

  percentage() {
      this.current = this.current / 100;
  }

  append(number) {
      if (this.operatorClicked) {
          this.current = 0;
          this.decimals = null;
          this.operatorClicked = false;
      }

      if (this.decimals) {
          this.current += number / 10**this.decimals++;
      } else {
          this.current = this.current * 10 + number;
      }
  }

  dot() {
      if (String(this.current).indexOf(".") === -1) {
          this.decimals = 1;
      }
  }

  setPrevious() {
      this.previous = this.current;
      this.operatorClicked = true;
  }

  divide() {
      this.operator = (a, b) => a / b;
      this.setPrevious();
  }

  multiply() {
      this.operator = (a, b) => a * b;
      this.setPrevious();
  }

  subtract() {
      this.operator = (a, b) => a - b;
      this.setPrevious();
  }

  add() {
      this.operator = (a, b) => a + b;
      this.setPrevious();
  }

  equal() {
      this.current = this.operator(
          this.current,
          this.previous
      );

      this.previous = 0;
  }
}
