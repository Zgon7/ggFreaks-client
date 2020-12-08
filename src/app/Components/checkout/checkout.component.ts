import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Client} from "../../Models/client";
import {ClientService} from "../../Services/Client/client.service";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  user: Client;

  constructor(private route: ActivatedRoute, private clientService: ClientService,
              private dialog: MatDialog) {
    this.user = new Client();
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params['price']);
    });
    this.clientService.findById(localStorage.getItem("userId")).subscribe(value => {
      this.user = value.client;
      console.log(this.user);
    })
  }

  pay() {
  }
}
