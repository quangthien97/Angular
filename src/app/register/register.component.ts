import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterService } from './../register.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {};
  constructor(private router: Router, private registerservice: RegisterService) { }
  ngOnInit() {
  }
  onSubmit() {
    this.router.navigateByUrl('/login')
  }
  postConfig() {
    console.log(this.model);
    let url = "http://localhost:3000/login/register";
    this.registerservice.post(url, this.model)
      .subscribe((data) => {
        console.log(data)
      })
    this.router.navigateByUrl('/login')
  }

}
