import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from './../../register.service';
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {
  model: any = {};
  data: {};
  public nameCate: string;
  id: string;
  constructor(private router: ActivatedRoute, private routerTest: Router, private registerservice: RegisterService) { }

  ngOnInit() {
    this.id = this.router.snapshot.paramMap.get("id");
    let url = "http://localhost:3000/category/" + this.id;
    this.registerservice.get(url)
      .subscribe((res) => {
        this.data = res['data']
        this.nameCate = res['data'].cateCheck.name;
      })
  }
  onSubmit() {
    let url = "http://localhost:3000/category/" + this.id;  
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
      this.routerTest.navigateByUrl('/category-list');
    } else {
      this.routerTest.navigateByUrl('/category-edit');
    }
  }
}
