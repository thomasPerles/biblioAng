import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './component/accueil/accueil.component';
import { HeaderComponent } from './component/header/header.component';
import { LivresComponent } from './component/livres/livres.component';
import { LivreItemComponent } from './component/livre-item/livre-item.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    HeaderComponent,
    LivresComponent,
    LivreItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
