import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from './../register.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  model: any = {};
  searchText: string;
  data: [];
  crPage = 1;
  constructor(private router: Router, private registerservice: RegisterService) { }

  ngOnInit() {
    let url = "http://localhost:3000/products/";
    this.registerservice.get(url)
      .subscribe((res) => {
        this.data = res['data']
        console.log(res['data'])
      })
  }
  logOut() {
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }
  onDelete(id) {
    let url = "http://localhost:3000/products/" + id;
    this.registerservice.delete(url)
      .subscribe((res) => {
        console.log(res)
        this.router.navigateByUrl('/product');
        this.ngOnInit()
      })
  }
  onStatus(id) {
    let url = "http://localhost:3000/products/status/" + id;
    console.log(url);
    this.registerservice.put(url, null)
      .subscribe((res) => {
        console.log(res)
        this.ngOnInit()
      })
  }
  next() {
    let nextPage;
    nextPage = this.crPage++;
    let url = "http://localhost:3000/category/?limit=1&page=" + nextPage;
    this.registerservice.get(url)
      .subscribe((res) => {
        this.data = res['data']
        console.log(res['data'])
      })
  }
}
