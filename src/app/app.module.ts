import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './component/accueil/accueil.component';
import { HeaderComponent } from './component/header/header.component';
import { LivresComponent } from './component/livres/livres.component';
import { LivreItemComponent } from './component/livre-item/livre-item.component';
import { LivreFormComponent } from './component/livre-form/livre-form.component';
import { HttpClientModule } from '@angular/common/http';
import { LivreDetailComponent } from './component/livre-detail/livre-detail.component';
import { AuthentificationComponent } from './component/authentification/authentification.component';
import { LivreEmpruntFormComponent } from './component/livre-emprunt-form/livre-emprunt-form.component';
import { LivreAvisFormComponent } from './component/livre-avis-form/livre-avis-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    HeaderComponent,
    LivresComponent,
    LivreItemComponent,
    LivreFormComponent,
    LivreDetailComponent,
    AuthentificationComponent,
    LivreEmpruntFormComponent,
    LivreAvisFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
