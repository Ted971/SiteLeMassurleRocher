import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { GiteComponent } from './gite/gite.component';
import { TarifsComponent } from './tarifs/tarifs.component';
import { DecouverteComponent } from './decouverte/decouverte.component';

const routes: Routes = [
  { path: 'Presentation/Gite', component:GiteComponent},
  { path: 'Presentation/Tarifs', component:TarifsComponent},
  { path: 'Presentation/Decouvertes', component:DecouverteComponent},
  { path: '', component:AcceuilComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
