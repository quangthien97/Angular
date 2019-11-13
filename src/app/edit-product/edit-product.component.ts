import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  model: any = {};
  data: {};
  public pro: {};
  id: string;
  public cates: {};
  constructor(private router: ActivatedRoute, private routerTest: Router, private registerservice: RegisterService) { }

  ngOnInit() {
    this.id = this.router.snapshot.paramMap.get("id");
    let url = "http://localhost:3000/products/" + this.id;
    this.registerservice.get(url)
      .subscribe((res) => {
        this.data = res['data'];
        this.model.title = res['data'].title;
        this.model.name = res['data'].name;
        this.model.oldPrice = res['data'].oldPrice;
        this.model.newPrice = res['data'].newPrice;
        this.model.count = res['data'].count;
        this.model.category = res['data'].category;
        this.cates = res['cate'];
        console.log(this.cates);
      })
  }
  onSubmit() {
    let url = "http://localhost:3000/products/" + this.id;
    console.log(url)
    this.registerservice.put(url, this.model)
      .subscribe((data) => {
        console.log(data)
        this.handleResponse(data)
      })
  }
  handleResponse(data) {
    console.log(data);
    if (data.code == 200) {
      this.routerTest.navigateByUrl('/product');
    } else {
      this.routerTest.navigateByUrl('/product-edit');
    }
  }

}
