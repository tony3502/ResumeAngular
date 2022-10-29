import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { HomePageRoutingModule } from './home-page-routing.module';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { AboutComponent } from './about/about.component';
import { AboutModalComponent } from './about/about-modal/about-modal.component';
import { LearningExpComponent } from './learning-exp/learning-exp.component';
import { HowDoesTheInternetWorkComponent } from './Internet/how-does-the-internet-work/how-does-the-internet-work.component';
import { ProtocolStacksComponent } from './Internet/protocol-stacks/protocol-stacks.component';



@NgModule({
  declarations: [
    HomePageComponent,
    TopNavbarComponent,
    AboutComponent,
    AboutModalComponent,
    LearningExpComponent,
    HowDoesTheInternetWorkComponent,
    ProtocolStacksComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    RouterModule,
    HomePageRoutingModule,
  ]
})
export class HomePageModule { }
