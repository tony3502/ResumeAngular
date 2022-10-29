import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-about-modal',
  templateUrl: './about-modal.component.html',
  styleUrls: ['./about-modal.component.css']
})
export class AboutModalComponent implements OnInit {
  @ViewChild('aboutModal') aboutModal: any;
  constructor(private ModalService: NgbModal) { }

  ngOnInit(): void {
  }

  open(modal: any) {
    this.ModalService.open(modal, { centered: true });
  }
  closeModal() {
    this.ModalService.dismissAll();
  }
}
