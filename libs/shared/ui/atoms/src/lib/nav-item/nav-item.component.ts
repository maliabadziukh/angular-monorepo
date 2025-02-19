import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterLinkActive, RouterModule} from '@angular/router'

@Component({
  selector: 'lib-nav-item',
  imports: [CommonModule, RouterModule, RouterLink, RouterLinkActive],
  templateUrl: './nav-item.component.html',
})
export class NavItemComponent {
  target  = input('/');
}
