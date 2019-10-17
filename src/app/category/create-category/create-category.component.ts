import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from './../../register.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {
  model: any = {};
  constructor(private router: Router, private registerservice: RegisterService) { }

  ngOnInit() {
  }
  onSubmit() {
    let url = "http://localhost:3000/category/";
    this.registerservice.post(url, this.model)
      .subscribe((data) => {
        console.log(data);
        this.handleResponse(data)
      })
  }
  handleResponse(data) {
    console.log(data);
    if (data.code == 200) {
      this.router.navigateByUrl('/category-list');
    } else {
      this.router.navigateByUrl('/login');
    }
  }

}
