import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '@angular-monorepo/atoms';
import { ButtonComponent } from '@angular-monorepo/molecules';

@Component({
  selector: 'lib-navbar',
  imports: [CommonModule, ButtonComponent, IconComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {}
