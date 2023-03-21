import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { RatingModule } from 'primeng/rating';
import { RippleModule } from 'primeng/ripple';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './component/accueil/accueil.component';
import { AuthentificationComponent } from './component/authentification/authentification.component';
import { HeaderComponent } from './component/header/header.component';
import { LivreAvisFormComponent } from './component/livre-avis-form/livre-avis-form.component';
import { LivreDetailComponent } from './component/livre-detail/livre-detail.component';
import { LivreEmpruntFormComponent } from './component/livre-emprunt-form/livre-emprunt-form.component';
import { LivreFormComponent } from './component/livre-form/livre-form.component';
import { LivreItemComponent } from './component/livre-item/livre-item.component';
import { LivresComponent } from './component/livres/livres.component';

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
    HttpClientModule,
    CalendarModule,
    BrowserAnimationsModule,
    PasswordModule,
    RatingModule,
    InputTextModule,
    RippleModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
