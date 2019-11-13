import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from './../../register.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-detail-category',
  templateUrl: './detail-category.component.html',
  styleUrls: ['./detail-category.component.css']
})
export class DetailCategoryComponent implements OnInit {
  model: any = {};
  data: {};
  public nameCate: string;
  id: string;
  constructor(private router: ActivatedRoute, private routerTest: Router, private registerservice: RegisterService) { }

  ngOnInit() {
    this.id = this.router.snapshot.paramMap.get("id");
    let url = "http://localhost:3000/category/id/" + this.id;
    this.registerservice.get(url)
      .subscribe((res) => {
        this.data = res['data'].cateCheck;
      })
  }

}
