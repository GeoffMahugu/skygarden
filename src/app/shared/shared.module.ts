import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { HttpModule } from "@angular/http";

//Third Party Imports
import {
  MatButtonModule,
  MatIconModule,
  //  MatCheckboxModule,
  MatToolbarModule,
  MatTabsModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  //  MatSnackBarModule,
  MatTooltipModule,
  MatCardModule
  //  MatDialogModule,
  //  MatStepperModule,
  //  MatNativeDateModule,
  //  MatDatepickerModule
} from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";
import { FooterComponent } from "./footer/footer.component";
import { TopNavbarComponent } from "./top-navbar/top-navbar.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule,

    MatButtonModule,
    MatIconModule,
    //  MatCheckboxModule,
    MatToolbarModule,
    MatTabsModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    //  MatSnackBarModule,
    MatTooltipModule,
    MatCardModule,
    //  MatDialogModule,
    //  MatStepperModule,
    //  MatNativeDateModule,
    //  MatDatepickerModule

    FlexLayoutModule
  ],
  declarations: [FooterComponent, TopNavbarComponent],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpModule,

    FooterComponent,
    TopNavbarComponent,

    MatButtonModule,
    MatIconModule,
    //  MatCheckboxModule,
    MatToolbarModule,
    MatTabsModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    //  MatSnackBarModule,
    MatTooltipModule,
    MatCardModule,
    //  MatDialogModule,
    //  MatStepperModule,
    //  MatNativeDateModule,
    //  MatDatepickerModule

    FlexLayoutModule
  ]
})
export class SharedModule {}
