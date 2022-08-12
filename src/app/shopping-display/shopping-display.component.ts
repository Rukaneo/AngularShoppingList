import { Items } from './../Models/items';
import { Component, OnInit } from '@angular/core';
import { ShoppingListServiceService } from '../shopping-list-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-shopping-display',
  templateUrl: './shopping-display.component.html',
  styleUrls: ['./shopping-display.component.css']
})
export class ShoppingDisplayComponent implements OnInit {
  items: Items[] = []
  // Item:Items= {
  //   "_id":"0001",
  //   "category":"Dairy",
  //   "item_name":"Milk",
  //   "quantity": 2,
  //   "price": 300
  // };
  // Items: Items[] = [this.Item,
  //     {
  //       "_id":"0002",
  //       "category":"Dairy",
  //       "item_name":"Yogurt",
  //       "quantity": 10,
  //       "price": 500
  //     },
  //     {
  //       "_id":"0003",
  //       "category":"Vegetable",
  //       "item_name":"Carrott",
  //       "quantity": 4,
  //       "price": 430,
  //     },
  //     {
  //       "_id":"0004",
  //       "category":"Vegetable",
  //       "item_name":"Tomato",
  //       "quantity": 5,
  //       "price": 100,
  //     },

  // ]

  constructor(private shoppingListService:ShoppingListServiceService,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.getlist();

  }
  getlist() {
    this.shoppingListService.getAllItems().subscribe(results=>{this.items = results.data})
  }

  delItem(datas:any): void {

    this.shoppingListService.deleteItem(datas._id).subscribe(results  => { console.log(results.data)});
    this.items =   this.items.filter((u:any)=>u!==datas)
    alert(`${datas.name} was deleted from database`);
  }

  getitem(){

    const id = this.route.snapshot.params['id'];

    this.shoppingListService.getItemById(id).subscribe(() => {
      this.items = this.items;
  })
  }

}
