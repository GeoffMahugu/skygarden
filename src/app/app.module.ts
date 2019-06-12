import { NgtUniversalModule } from "@ng-toolkit/universal";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

//Import Routing Module
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    NgtUniversalModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: []
})
export class AppModule {}
