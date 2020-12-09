import { Component, OnInit } from '@angular/core';
import {Produit} from "../../Models/produit";
import {Categorie} from "../../Models/categorie";
import {ActivatedRoute, Router} from "@angular/router";
import * as SecureLS from 'secure-ls';
import {MiniPanierComponent} from "../mini-panier/mini-panier.component";
import {ProduitService} from "../../Services/Produit/produit.service";
interface CartProdcut {
  productToAdd: Produit;
  qte: number;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  sousCateg = null;
  products: Produit[];
  category: Categorie;
  cart: CartProdcut;
  private tabRes: CartProdcut[];
  private test = true;
  private pan: MiniPanierComponent;
  private ls: SecureLS;


  constructor(private productService: ProduitService, private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.sousCateg = params['name'];
    })

    this.ls = new SecureLS({encodingType: 'aes'});
    this.reloadData();
  }
  reloadData() {
    if (this.sousCateg == null) {
      this.productService.findAll().subscribe(r => {
        this.products = r.produits;
        console.log(r);
      });
    } else {
      this.productService.findBySousCateg(this.sousCateg).subscribe(r => {
        this.products = r.produits;
        console.log(r);
      });
    }
  }

  deleteProduct(idProduct: number) {
    this.productService.delete(idProduct.toString()).subscribe(data => {
      console.log(data);
      this.reloadData();
    }, error => console.log(error));
  }

  productDetails(id: number) {
    this.router.navigate(['detailProduct', id]);
  }

  updateProduct(id: number) {
    this.reloadData();
    this.router.navigate(['updateProduct', id]);
  }

  addToCarta(newProduct: Produit) {
    this.tabRes = this.ls.get('_temp_user_p_key');
    // this.tabRes = JSON.parse(this.allProductStringRes);
    console.log(this.tabRes) ;
    // tslint:disable-next-line:triple-equals
    if (this.tabRes == null || this.tabRes == undefined || this.tabRes.length == 0) {
      this.tabRes = [] ;
      this.tabRes.push(this.cart = {productToAdd: newProduct, qte: 1}); console.log('tab jdida ');
    } else if (this.tabRes.length > 0) {
      for (const f of this.tabRes) {
        if (f.productToAdd._id.toString() === newProduct._id.toString()) {
          f.qte = f.qte + 1;
          this.test = false;
          break;
        } else { this.test = true ; }}
      if (this.test === true) {
        this.cart = {productToAdd: newProduct, qte: 1};
        this.tabRes.push(this.cart);
        console.log('zedna produit jdid khater ' ); }
    }
    // this.allProductStringRes = JSON.stringify(this.tabRes);
    this.ls.set('_temp_user_p_key', this.tabRes);
    // tslint:disable-next-line:no-unused-expression label-position
  }
}
