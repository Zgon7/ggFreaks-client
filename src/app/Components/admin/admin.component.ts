import { Component, OnInit } from '@angular/core';
import {Admin} from "../../Models/admin";
import {AdminService} from "../../Services/Admin/admin.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  admin: Admin;
  admins: Array<Admin>;

  constructor(private adminService: AdminService) {
    this.admin = new Admin();
    this.admins = new Array<Admin>();
  }

  ngOnInit(): void {
    this.adminService.findAll().subscribe(data => {
      this.admins = data.admins;
      console.log(this.admins);
    });
  }

  test() {
    this.adminService.save(this.admin).subscribe(data => {
      console.log(data);
    })
  }

}
