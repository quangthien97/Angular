import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-category',
  templateUrl: './search-category.component.html',
  styleUrls: ['./search-category.component.css']
})
export class SearchCategoryComponent implements OnInit {
  searchText: any;
  @Output() messageEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  onChange() {
    this.messageEvent.emit(this.searchText);
  }

}
