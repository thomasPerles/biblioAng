import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './component/accueil/accueil.component';
import { LivreDetailComponent } from './component/livre-detail/livre-detail.component';
import { LivreFormComponent } from './component/livre-form/livre-form.component';
import { LivresComponent } from './component/livres/livres.component';

const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'accueil', component: AccueilComponent },
  { path: 'livres', component: LivresComponent },
  { path: 'livreFormulaire', component: LivreFormComponent },
  { path: 'livreFormulaire/:id', component: LivreFormComponent },
  { path: 'livreDetail/:id', component: LivreDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
