import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '@angular-monorepo/atoms';
import {
  ButtonComponent,
  NavLinksComponent,
} from '@angular-monorepo/molecules';
import { MenuModalComponent } from '@angular-monorepo/organisms';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'lib-navbar',
  imports: [
    CommonModule,
    ButtonComponent,
    IconComponent,
    MenuModalComponent,
    NavLinksComponent,
    RouterModule, RouterLink, RouterLinkActive
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  menuLinks = [
    { name: 'All Games', target: '/' },
    { name: 'Top 100', target: '/' },
    { name: 'By Genre', target: '/' },
    { name: 'Game-detail', target: '/game-details' },
  ];
  isMenuOpen = signal(false);

  openMenu() {
    console.log('opening menu');
    this.isMenuOpen.set(true);
  }

  closeMenu() {
    this.isMenuOpen.set(false);
  }
}
