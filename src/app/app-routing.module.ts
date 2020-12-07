import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./Components/home/home.component";
import {RegisterLoginComponent} from "./Components/register-login/register-login.component";
import {PanierComponent} from "./Components/panier/panier.component";
import {CreateProduitComponent} from "./Components/Admin/create-produit/create-produit.component";



const routes: Routes = [
  {path : '' , component: HomeComponent},
  {path : 'Login', component: RegisterLoginComponent},
  {path : 'panier', component: PanierComponent},
  {path: 'admin/addproduct', component: CreateProduitComponent},
  /*{path : 'client/product/:id', component: CategoryDetailsComponent},
  {path: 'admin/categories', component: CategoryListBACKComponent},
  {path: 'admin/addCategory', component: CreateCategoryComponent},
  {path: 'admin/updateCategory/:id', component: UpdateCategoryComponent},
  {path: 'admin/detailCategory/:id', component: CategoryDetailsBACKComponent},
  {path: 'admin/products', component: ProductListBACKComponent},
  {path: 'admin/detailProduct/:id', component: ProductDetailsComponent},
  {path: 'admin/updateProduct/:id', component: UpdateProductComponent}*/

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
