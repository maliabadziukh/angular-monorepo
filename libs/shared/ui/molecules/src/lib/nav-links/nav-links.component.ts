import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavItemComponent } from '@angular-monorepo/atoms';

@Component({
  selector: 'lib-nav-links',
  imports: [CommonModule, NavItemComponent],
  templateUrl: './nav-links.component.html',
  styleUrl: './nav-links.component.css',
})
export class NavLinksComponent {
  navLinks = input<{ name: string; target: string }[]>([]);
}
