import { Component, computed, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-nav-item',
  imports: [CommonModule],
  templateUrl: './nav-item.component.html',
})
export class NavItemComponent {
  target  = input('/');
}
