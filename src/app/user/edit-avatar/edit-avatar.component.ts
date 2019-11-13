import { Component, OnInit } from '@angular/core';
import { read } from 'fs';

@Component({
  selector: 'app-edit-avatar',
  templateUrl: './edit-avatar.component.html',
  styleUrls: ['./edit-avatar.component.css']
})
export class EditAvatarComponent implements OnInit {
  url = "";
  constructor() { }

  ngOnInit() {
  }
  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);

      reader.onload = (event) => {
        this.url = event.target.result;
      }
    }
  }
  onSubmit(){
    
  }

}
