import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  public categories: any;
  public deals: any;
  constructor() {}

  ngOnInit() {
    this.categories = [
      {
        'name': "Mans Fashion",
        "sub_title": "Clothes and accesories",
        'image': "../../../assets/images/categories/men.png"
      },
      {
        'name': "All For Women",
        "sub_title": "Clothes and accesories",
        'image': "../../../assets/images/categories/women.png"
      },
      {
        'name': "Smartphones",
        "sub_title": "Phones and accesories",
        'image': "../../../assets/images/categories/smartphone.png"
      },
      {
        'name': "Home & Living",
        "sub_title": "Beddings and funiture",
        'image': "../../../assets/images/categories/home_living.png"
      },
      {
        'name': "Beauty",
        "sub_title": "All for your skin and hair",
        'image': "../../../assets/images/categories/beauty.png"
      },
      {
        'name': "Kids",
        "sub_title": "Toys and Clothes",
        'image': "../../../assets/images/categories/kids.png"
      }
    ];
      
    this.deals = [
        {
        'name': "Gold necklace with a package",
        "sub_title": "Veranda Green",
        "new_price": "216 KSH",
        "old_price": "296 KSH",
        'image': "../../../assets/images/section_3/gold.png"
        },
        {
        'name': "Gold necklace",
        "sub_title": "Veranda Green",
        "new_price": "216 KSH",
        "old_price": "296 KSH",
        'image': "../../../assets/images/section_3/gold_1.png"
        },
        {
        'name': "Gold necklace",
        "sub_title": "Veranda Green",
        "new_price": "216 KSH",
        "old_price": "296 KSH",
        'image': "../../../assets/images/section_3/gold_2.png"
        },
        {
        'name': "Gold necklace",
        "sub_title": "Veranda Green",
        "new_price": "216 KSH",
        "old_price": "296 KSH",
        'image': "../../../assets/images/section_3/gold_3.png"
        },
    ];
  }
}
