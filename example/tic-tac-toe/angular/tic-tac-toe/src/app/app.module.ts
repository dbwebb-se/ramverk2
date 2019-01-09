import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { BoardComponent } from './board/board.component';
import { SquareComponent } from './square/square.component';
import { GameInfoComponent } from './game-info/game-info.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    BoardComponent,
    SquareComponent,
    GameInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
