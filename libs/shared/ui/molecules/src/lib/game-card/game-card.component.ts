import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '@angular-monorepo/atoms';

@Component({
  selector: 'lib-game-card',
  imports: [CommonModule, ButtonComponent],
  templateUrl: './game-card.component.html',
  styleUrl: './game-card.component.css',
})
export class GameCardComponent {}
