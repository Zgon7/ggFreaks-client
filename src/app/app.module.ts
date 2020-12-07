import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { HomeComponent } from './Components/home/home.component';
import { FooterComponent } from './Components/footer/footer.component';
import { NavComponent } from './Components/nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import {MatGridListModule} from "@angular/material/grid-list";
import {AppRoutingModule} from "./app-routing.module";
/*import {MatIconModule} from "@angular/material/icon";
import {MatSelectModule} from "@angular/material/select";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatRadioModule} from "@angular/material/radio";*/
import {MatNativeDateModule} from "@angular/material/core";
import {MatIconModule} from "@angular/material/icon";
// import {MatDialogModule} from "@angular/material/dialog";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatRadioModule} from "@angular/material/radio";
import {MatDialogModule} from "@angular/material/dialog";
import { ProductsComponent } from './Components/products/products.component';
import { MiniPanierComponent } from './Components/mini-panier/mini-panier.component';
import { CreateProduitComponent } from './Components/Admin/create-produit/create-produit.component';
import { PanierComponent } from './Components/panier/panier.component';
import { LoginComponent } from './Components/register-login/login/login.component';
import { RegisterComponent } from './Components/register-login/register/register.component';
import {DialogComponent} from "./Components/register-login/dialog.component";
import { RegisterLoginComponent } from './Components/register-login/register-login.component';



@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    HomeComponent,
    FooterComponent,
    NavComponent,
    ProductsComponent,
    MiniPanierComponent,
    CreateProduitComponent,
    PanierComponent,
    LoginComponent,
    RegisterComponent,
    RegisterLoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule, MatButtonModule, MatMenuModule, MatGridListModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatIconModule,
    /*MatSelectModule,
    MatDatepickerModule,
    MatButtonToggleModule,
    MatRadioModule,
    MatDialogModule,*/
    ReactiveFormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MatIconModule,
    MatToolbarModule,
    MatInputModule, MatDialogModule,
  ],
  entryComponents: [DialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
