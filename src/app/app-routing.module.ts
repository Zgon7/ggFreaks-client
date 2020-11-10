import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./Components/home/home.component";



const routes: Routes = [
  {path : '' , component: HomeComponent},
  /*{path : 'Contact', component: ContactComponent},
  {path : 'Login', component: RegisterLoginComponent},
  {path : 'panier', component: PanierComponent},
  {path : 'client/product/:id', component: CategoryDetailsComponent},
  {path: 'admin/categories', component: CategoryListBACKComponent},
  {path: 'admin/addCategory', component: CreateCategoryComponent},
  {path: 'admin/updateCategory/:id', component: UpdateCategoryComponent},
  {path: 'admin/detailCategory/:id', component: CategoryDetailsBACKComponent},
  {path: 'admin/products', component: ProductListBACKComponent},
  {path: 'admin/addProduct', component: CreateProductComponent},
  {path: 'admin/detailProduct/:id', component: ProductDetailsComponent},
  {path: 'admin/updateProduct/:id', component: UpdateProductComponent}*/

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
