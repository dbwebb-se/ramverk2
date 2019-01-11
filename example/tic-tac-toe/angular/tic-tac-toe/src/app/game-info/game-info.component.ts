import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.css']
})
export class GameInfoComponent implements OnInit {
  @Input() next: string;
  @Input() moves: Array<string>;
  @Output() onJump = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  jump(move) {
    this.onJump.emit(move);
  }
}
