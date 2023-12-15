import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { GiteComponent } from './gite/gite.component';
import { TarifsComponent } from './tarifs/tarifs.component';
import { DecouverteComponent } from './decouverte/decouverte.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HeadercssService } from './headercss.service';

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    GiteComponent,
    TarifsComponent,
    DecouverteComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [HeadercssService],
  bootstrap: [AppComponent]
})
export class AppModule { }
