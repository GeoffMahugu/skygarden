import { NgModule } from "@angular/core";
import { RouterModule, Routes, PreloadAllModules } from "@angular/router";

const appRoutes: Routes = [
  {
    path: "",
    loadChildren: "./landing/landing.module#LandingModule"
  },
  {
    path: "**",
    loadChildren: "./landing/landing.module#LandingModule"
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
