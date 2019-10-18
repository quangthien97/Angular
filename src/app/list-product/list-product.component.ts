import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from './../register.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  model: any = {};
  constructor(private router: Router, private registerservice: RegisterService) { }

  ngOnInit() {
    let url = "http://localhost:3000/products/";
    this.registerservice.get(url)
      .subscribe((data) => {
        console.log(data);
      })
  }
  logOut() {
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }

}
