import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.css']
})
export class TopNavbarComponent implements OnInit, AfterViewInit {
  @ViewChild('nav') nav: any;
  active = 1;
  constructor() { }
  ngAfterViewInit(): void {
    console.log(this.nav);
  }

  ngOnInit(): void {

  }

}
