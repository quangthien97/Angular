import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from './../../register.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {
  model: any = {};
  searchText: string;
  data: [];
  crPage = 1;
  disableLui: boolean;
  nextPage;
  constructor(private router: Router, private registerservice: RegisterService) {

  }

  ngOnInit() {
    // let page,
    //   limit;
    let url = "http://localhost:3000/category/?page=" + this.crPage;
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
  receiveMessage($event) {
    this.searchText = $event;
    this.searchList();
  }
  searchList() {
    let url = "http://localhost:3000/category/" + this.searchText;
    this.registerservice.get(url)
      .subscribe((res) => {
        console.log(res)
        this.data = res['data']
      })
  }
  next() {
    this.data = []
    this.nextPage = ++this.crPage;
    console.log(this.nextPage)
    let url = "http://localhost:3000/category/?page=" + this.nextPage;
    this.registerservice.get(url)
      .subscribe((res) => {
        this.data = res['data']
        console.log(res['data'])
        this.handleDisable(this.crPage)
      })
  }
  lui() {
    let luiPage;
    this.data = [];
    luiPage = --this.crPage;
    let url = "http://localhost:3000/category/?page=" + luiPage;
    this.registerservice.get(url)
      .subscribe((res) => {
        this.data = res['data']
        this.handleDisable(this.crPage)
        console.log(res['data'])
      })
  }
  handleDisable(crPage) {
    if (crPage < 2) {
      this.crPage = 1;
      this.disableLui = true;
    } else {
      this.disableLui = false;
    }
  }
}
