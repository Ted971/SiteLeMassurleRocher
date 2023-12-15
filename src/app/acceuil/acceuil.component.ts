import { Component } from '@angular/core';
import { Router } from '@angular/router';

declare const currentSlide: any;

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent {

  constructor(public rt : Router){}
  ext1:any = "assets/images/ext1.jpg";
  ext2:any = "assets/images/logia1.jpg";
  ext3:any = "assets/images/terrasse_surexpose.jpg";
  ext4:any = "assets/images/bckg.jpg";
  back:any = "assets/images/bckg.jpg";
  bandeau:any = "assets/images/bandeau.jpg";
  vueM:any = "assets/images/maison.jpg";
  facade:any = "assets/images/facade.jpg";
  piscine:any = "assets/images/entreepiscine.jpg";
  vueTE:any = "assets/images/vuecuisineete2.jpg";
  vueL:any = "assets/images/boulodrome.jpg";
  pano:any = "assets/images/panorama.jpg";
  allee:any = "assets/images/allee.jpg";
  terraceE:any = "assets/images/vuecuisineete.jpg";
  cuisineE:any = "assets/images/cuisineeteint.jpg";
  terraceEN:any = "assets/images/cuisineete.jpg";

  ngOnInit() {
    currentSlide(1)
  }
}


