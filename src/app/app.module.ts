import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { HomeComponent } from './core/home/home.component';
import { FooterComponent } from './core/footer/footer.component';
import { ProductsComponent } from './shared/products/products.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatOptionModule } from '@angular/material/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
// import { MatCardModule } from '@angular/material/Card';
import {MatAutocompleteModule} from '@angular/material/autocomplete'
import { MatIconModule} from '@angular/material/icon'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatAutocompleteModule,
    // MatCardModule,
    ReactiveFormsModule,
    MatIconModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }