import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameCardComponent } from '@angular-monorepo/molecules';
@Component({
  selector: 'app-home',
  imports: [CommonModule, GameCardComponent],
  templateUrl: './home.page.html',
  styleUrl: './home.page.css',
})
export class HomePage {}
