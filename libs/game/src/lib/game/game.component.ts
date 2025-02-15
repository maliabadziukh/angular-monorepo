import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiComponent } from '@angular-monorepo/ui';

@Component({
  selector: 'lib-game',
  imports: [CommonModule, UiComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css',
})
export class GameComponent {}
