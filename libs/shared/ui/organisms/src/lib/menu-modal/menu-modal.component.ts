import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '@angular-monorepo/molecules';
import { IconComponent } from '@angular-monorepo/atoms';

@Component({
  selector: 'lib-menu-modal',
  imports: [CommonModule, ButtonComponent, IconComponent],
  templateUrl: './menu-modal.component.html',
  styleUrl: './menu-modal.component.css',
})
export class MenuModalComponent {
  isOpen = input(false);
  close = output<void>();
}
