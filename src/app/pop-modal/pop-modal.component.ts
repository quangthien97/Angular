import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pop-modal',
  templateUrl: './pop-modal.component.html',
  styleUrls: ['./pop-modal.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class PopModalComponent {

  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  open(content) {
    console.log(content);
    
    this.modalService.open(content, { size: 'xl' as 'lg' });
  }

}
