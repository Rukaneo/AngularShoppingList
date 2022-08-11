import { Component, OnInit } from '@angular/core';
import { Items } from '../Models/items';
@Component({
  selector: 'app-shopping-display',
  templateUrl: './shopping-display.component.html',
  styleUrls: ['./shopping-display.component.css']
})
export class ShoppingDisplayComponent implements OnInit {
  Item:Items= {
    "_id":"0001",
    "category":"Dairy",
    "name":"Milk",
    "quantity": 2,
    "price": 300
  };
  Items: Items[] = [this.Item,
      {
        "_id":"0002",
        "category":"Dairy",
        "name":"Yogurt",
        "quantity": 10,
        "price": 500
      },
      {
        "_id":"0003",
        "category":"Vegetable",
        "name":"Carrott",
        "quantity": 4,
        "price": 430,
      },
      {
        "_id":"0004",
        "category":"Vegetable",
        "name":"Tomato",
        "quantity": 5,
        "price": 100,
      },

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
