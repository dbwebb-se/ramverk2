import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {
  clicked = false;
  @Input() index: number;
  @Output() gotClicked = new EventEmitter<boolean>();


  constructor() { }

  ngOnInit() {
  }

  click() {
    console.log("click")
    if (!this.clicked) {
        this.clicked = true;
        this.gotClicked.emit(this.clicked);
    }
  }
}
