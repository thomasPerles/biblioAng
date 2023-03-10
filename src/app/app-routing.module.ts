import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './component/accueil/accueil.component';
import { AuthentificationComponent } from './component/authentification/authentification.component';
import { LivreAvisFormComponent } from './component/livre-avis-form/livre-avis-form.component';
import { LivreDetailComponent } from './component/livre-detail/livre-detail.component';
import { LivreEmpruntFormComponent } from './component/livre-emprunt-form/livre-emprunt-form.component';
import { LivreFormComponent } from './component/livre-form/livre-form.component';
import { LivresComponent } from './component/livres/livres.component';

const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'accueil', component: AccueilComponent },
  { path: 'livres', component: LivresComponent },
  { path: 'livreFormulaire', component: LivreFormComponent },
  { path: 'livreFormulaire/:id', component: LivreFormComponent },
  { path: 'livreDetail/:id', component: LivreDetailComponent },
  { path: 'authentification/:id', component: AuthentificationComponent },
  { path: 'livreEmpruntFormulaire/:id', component: LivreEmpruntFormComponent },
  { path: 'livreAvisFormulaire/:id', component: LivreAvisFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
