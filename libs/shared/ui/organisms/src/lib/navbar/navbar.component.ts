import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavItemComponent } from '@angular-monorepo/atoms';

@Component({
  selector: 'lib-navbar',
  imports: [CommonModule, NavItemComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {}
