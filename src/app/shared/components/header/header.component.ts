import { Component } from '@angular/core';
import { navElement } from '../../models/nav-element.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  navElements: navElement[] = [
    { label: 'Home', url: '/home'},
    { label: 'Other', url: '/other'},
    { label: 'Other', url: '/other'}
  ];
}
