import { CartComponent } from './core/cart/cart.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./core/home/home.component";
import { UserComponent } from "./core/user/user.component";

const appRoutes: Routes = [

  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',

  },

  {
    path: 'home',
    component: HomeComponent
  },

  {
    path: 'user',
    component: UserComponent
  },

  {
    path: 'cart',
    component: CartComponent
  }

]


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]

})

export class AppRoutingModule{}
