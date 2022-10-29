import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-protocol-stacks',
  templateUrl: './protocol-stacks.component.html',
  styleUrls: ['./protocol-stacks.component.css']
})
export class ProtocolStacksComponent implements OnInit {

  constructor(private modalService: NgbModal) { }
  physicalLayer = true;
  dataLinkLayer = true;
  networkLayer = true;
  transportLayer = true;
  sessionLayer = true;
  PresentationLayer = true;
  ApplicationLayer = true;
  ngOnInit(): void {
  }
}
