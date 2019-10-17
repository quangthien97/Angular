import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from './../../register.service';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {
  model: any = {};
  data: [];
  constructor(private router: Router, private registerservice: RegisterService) { }

  ngOnInit() {
    let url = "http://localhost:3000/category/";
    this.registerservice.get(url)
      .subscribe((res) => {
        this.data = res['data']
      })
  }
  onDelete(id) {
    let url = "http://localhost:3000/category/" + id;
    this.registerservice.delete(url)
      .subscribe((res) => {
        console.log(res)
        this.router.navigateByUrl('/category-list');
        this.ngOnInit()
      })
  }
}
