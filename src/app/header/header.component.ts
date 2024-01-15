import { Component, HostListener } from '@angular/core';
import { HeadercssService } from '../headercss.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isSticky: boolean = false;
  bandeau:any = "assets/images/bandeau.jpg";

  constructor(private headercssService: HeadercssService) {}

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    const scrollOffset = window.scrollY;
    this.isSticky = scrollOffset >= 370; /* Ajustez ce chiffre en fonction de la position où vous souhaitez que la navbar se fixe */
  }
}
