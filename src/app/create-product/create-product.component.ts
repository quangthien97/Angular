import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from '../register.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  model: any = {};
  searchText: string;
  data: [];
  public Editor = ClassicEditor;
  // public onReady(editor) {
  //   editor.ui.getEditableElement().parentElement.insertBefore(
  //     editor.ui.view.toolbar.element,
  //     editor.ui.getEditableElement()
  //   );
  // }
  constructor(private router: Router, private registerservice: RegisterService) { }

  ngOnInit() {
    let url = "http://localhost:3000/category/";
    this.registerservice.get(url)
      .subscribe((res) => {
        this.data = res['data']
      })
  }
  onSubmit() {
    let url = "http://localhost:3000/products/";
    this.registerservice.post(url, this.model)
      .subscribe((data) => {
        this.handleResponse(data)
      })
  }
  handleResponse(data) {
    if (data.code == 200) {
      this.router.navigateByUrl('/product');
    } else {
      this.router.navigateByUrl('/product');
    }
  }

}
