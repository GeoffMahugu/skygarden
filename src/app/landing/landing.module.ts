import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

//Import Shared Modules
import { SharedModule } from "../shared/shared.module";

import { LandingRoutingModule } from "./landing-routing.module";
import { HomeComponent } from "./home/home.component";

@NgModule({
  imports: [SharedModule, CommonModule, LandingRoutingModule],
  declarations: [HomeComponent]
})
export class LandingModule {}
