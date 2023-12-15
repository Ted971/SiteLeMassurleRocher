import { Component } from '@angular/core';

declare const currentSlide: any;

@Component({
  selector: 'app-gite',
  templateUrl: './gite.component.html',
  styleUrls: ['./gite.component.css']
})
export class GiteComponent {

  cheminImage:any = "assets/images/photo4.jpg";
  cheminImage2:any = "assets/images/photo5.jpg";
  cheminImage3:any = "assets/images/chambre3.jpg";
  cuisine:any = "assets/images/cuisine.jpg";
  salon:any = "assets/images/photo6.jpg";
  cEte:any = "assets/images/cuisine_ete.jpg";
  tEte:any = "assets/images/ext3.jpg";
  jardin:any = "assets/images/ext2.jpg";
  monolit:any = "assets/images/sde.jpg";
  piscine:any = "assets/images/salon.jpg";
  vue:any = "assets/images/vcc.jpg";
  boul:any = "assets/images/acces.jpg";
  pisc:any = "assets/images/cuisine_int.jpg";

  ngOnInit() {
    currentSlide(1)
  }

}
