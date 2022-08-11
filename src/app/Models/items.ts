export class Items{
_id:String;
name: String;
category: String;
price: Number;
quantity: Number;


constructor(_id?: String, name?:String, category?:String, price?:Number, quantity?:Number){
  this._id = _id!;
  this.name = name!;
  this.category = category!;
  this.price = price!;
  this.quantity = quantity!;

}
}
