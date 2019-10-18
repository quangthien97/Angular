import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from './../register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  constructor(private router: Router, private registerservice: RegisterService) {
  }

  ngOnInit() {
    if (localStorage.getItem("auth_token")) {
      this.router.navigateByUrl('/category-list')
    }
  }
  onSubmit() {
    localStorage.clear();
    let url = "http://localhost:3000/login/";
    this.registerservice.post(url, this.model)
      .subscribe((data) => {
        console.log(data);
        this.handleResponse(data)
      })
  }
  handleResponse(data) {
    if (data.code == 200) {
      localStorage.setItem('auth_token', data.token);
      this.router.navigateByUrl('/product');
    } else {
      this.router.navigateByUrl('/login');
    }
  }

}

