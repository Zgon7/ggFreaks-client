import { Component, OnInit } from '@angular/core';
import * as SecureLS from 'secure-ls';
import {NavComponent} from '../nav/nav.component';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {Produit} from "../../Models/produit";
interface CartProdcut {
  productToAdd: Produit;
  qte: number;
}
@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  logged: boolean;
  isMobile: boolean;
  showHideImg: boolean;
  imgSrc: string;
  tabRes: CartProdcut[];
  ls: SecureLS;
  totalPrice: number;
  emptyTab: boolean;
  showLogIns: boolean;
  constructor() { }

  ngOnInit() {
    this.showLogIns = false;
    this.logged = false;
    this.emptyTab = false;
    this.imgSrc = '';
    this.showHideImg = false;
    this.isMobile = /msie\s|trident\/|edge\//i.test(window.navigator.userAgent);
    this.ls = new SecureLS({encodingType: 'aes'});
    this.totalPrice = 0;
    this.tabRes = this.ls.get('_temp_user_p_key');
    if (this.tabRes.length > 0) {
      for (const f of this.tabRes) {
        this.totalPrice += (f.productToAdd.prix * f.qte);
      }
    } else {
      this.emptyTab = true;
    }
  }

  showImg(x, src) {
    if (x === 1) {
      this.imgSrc = src;
      console.log('show');
      this.showHideImg = true;
    } else {
      console.log('show');
      this.showHideImg = false;
    }
  }

  incr(idProd: string) {
    for (const f of this.tabRes) {
      if (f.productToAdd._id.toString() === idProd) {
        f.qte++;
        this.totalPrice += (f.productToAdd.prix);
        break; }}
    this.ls.set('_temp_user_p_key', this.tabRes);
  }

  decr(idProd: string) {
    for (const f of this.tabRes) {
      if (f.productToAdd._id === idProd) {
        f.qte--;
        this.totalPrice -= (f.productToAdd.prix);
        if ( f.qte === 0) {
          this.suppProduct(f.productToAdd._id) ;
        }
        break; }}
    this.ls.set('_temp_user_p_key', this.tabRes);
  }

  suppProduct(idProd: string) {
    this.tabRes = this.ls.get('_temp_user_p_key');
    console.log(this.tabRes) ;
    let i = 0 ;
    for (const f of this.tabRes) {
      if (f.productToAdd._id === idProd) {
        this.tabRes.splice(i, 1);
        break;
      }
      i++ ;
    }
    this.ls.set('_temp_user_p_key', this.tabRes);
    if (this.tabRes.length <= 0) {
      this.emptyTab = true;
    }
  }

  checkIfLoggedIn() {

    // test ken logged in or not
    this.showLogIns = true;
  }
  closeLogIns() {
    this.showLogIns = false;
  }
}

