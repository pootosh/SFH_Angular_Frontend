import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { HomeComponent } from './core/home/home.component';
import { ProductsComponent } from './shared/products/products.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import { DropdownComponent } from './shared/common/dropdown/dropdown.component';
import { LocationComponent } from './core/header/location/location.component';
import { UserComponent } from './core/user/user.component';
import { CartComponent } from './core/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ProductsComponent,
    DropdownComponent,
    LocationComponent,
    UserComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    MatAutocompleteModule,

    ReactiveFormsModule,
    MatIconModule,

    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
