import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '@angular-monorepo/atoms';
import { ButtonComponent } from '@angular-monorepo/molecules';
import { MenuModalComponent } from '@angular-monorepo/organisms';

@Component({
  selector: 'lib-navbar',
  imports: [CommonModule, ButtonComponent, IconComponent, MenuModalComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  isMenuOpen = signal(false);

  openMenu() {
    console.log('opening menu')
    this.isMenuOpen.set(true);
  }

  closeMenu(){
    this.isMenuOpen.set(false);
  }
}
