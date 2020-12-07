import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Observable} from "rxjs";
import {Produit} from "../../../Models/produit";
import {Categorie} from "../../../Models/categorie";
import {ProduitService} from "../../../Services/Produit/produit.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {CategorieService} from "../../../Services/Categorie/categorie.service";
import {SousCategorieService} from "../../../Services/SousCategorie/sous-categorie.service";
import {SousCategorie} from "../../../Models/sousCategorie";

@Component({
  selector: 'app-create-produit',
  templateUrl: './create-produit.component.html',
  styleUrls: ['./create-produit.component.css']
})
export class CreateProduitComponent implements OnInit {
  @Output() closeAll = new EventEmitter<boolean>();

  product: Produit = new Produit();
  submitted = false;
  selectedCategory: Categorie;
  selectedFile: File;
  event1;
  imgUrl: any;
  recievedImageData: any;
  base64Data: any;
  convertImage: any;
  categoriesList: Array<Categorie>;
  sousCategoriesList: Array<SousCategorie>;

  constructor(private productService: ProduitService, private router: Router, private httpClient: HttpClient,
              private categorieService: CategorieService, private sousCategorieService: SousCategorieService) {
    this.categoriesList = new Array<Categorie>();
    this.sousCategoriesList = new Array<SousCategorie>();
  }

  ngOnInit() {
    this.categorieService.findAll().subscribe(data => this.categoriesList = data.categories, error =>
      console.log(error));
  }
  newProduct(): void {
    this.submitted = false;
    this.product = new Produit();
  }
  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }
  save() {
    try {
      this.productService.save(this.product)
        .subscribe(data => console.log(data), error => {console.log(error);
          this.productService.findAll(); });
      this.product = new Produit();
    } catch (e) {
      console.log('invalid');
    }
  }
  closeThis() {
    this.submitted = true;
    this.save();
    this.closeAll.emit(true);
  }

  onChange(value: any) {
    // @ts-ignore
    console.log(this.selectedCategory.nom);
    this.sousCategorieService.findByCategorie(this.selectedCategory._id).subscribe(value1 => {
      this.sousCategoriesList = value1.sousCategories;
    })
  }
}
