import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomePageComponent } from './home-page.component';
import { HowDoesTheInternetWorkComponent } from './Internet/how-does-the-internet-work/how-does-the-internet-work.component';
import { ProtocolStacksComponent } from './Internet/protocol-stacks/protocol-stacks.component';
import { LearningExpComponent } from './learning-exp/learning-exp.component';

const routes: Routes = [
  {
    path: "home",
    component: HomePageComponent,
    children: [
      { path: "how-does-the-internet-work", component: HowDoesTheInternetWorkComponent },
      { path: "protocol-stacks", component: ProtocolStacksComponent },
      { path: "learning", component: LearningExpComponent },
      { path: "about", component: AboutComponent },
      { path: "", redirectTo: "about", pathMatch: "full" }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
