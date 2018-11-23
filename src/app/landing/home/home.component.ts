import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  private categories: [any];
  constructor() {}

  ngOnInit() {
    this.categories = [
      {
        name: "Mans Fashion",
        "sub-title": "Clothes and accesories",
        image: "../../../assets/images/categories/men.png"
      },
      {
        name: "All For Women",
        "sub-title": "Clothes and accesories",
        image: "../../../assets/images/categories/women.png"
      },
      {
        name: "Smartphones",
        "sub-title": "Phones and accesories",
        image: "../../../assets/images/categories/smartphone.png"
      },
      {
        name: "Home & Living",
        "sub-title": "Beddings and funiture",
        image: "../../../assets/images/categories/home_living.png"
      },
      {
        name: "Home & Living",
        "sub-title": "All for your skin and hair",
        image: "../../../assets/images/categories/beauty.png"
      },
      {
        name: "Kids",
        "sub-title": "Toys and Clothes",
        image: "../../../assets/images/categories/beauty.png"
      }
    ];
    console.log(this.categories);
  }
}
