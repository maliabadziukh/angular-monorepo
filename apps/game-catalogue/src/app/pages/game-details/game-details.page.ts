import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonComponent}  from "@angular-monorepo/molecules"

@Component({
  selector: 'app-game-details',
  imports: [CommonModule, ButtonComponent],
  templateUrl: './game-details.page.html',
  styleUrl: './game-details.page.css',
})
export class GameDetailsPageComponent {}
