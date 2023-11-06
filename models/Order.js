const { Schema, model, models } = require("mongoose");

const OrderSchema = new Schema({
  items_list: Object,
  name:String,
  email:String,
  city:String,
  address:String,
  postalCode:String,
  country:String,
  paid: Boolean,
});

export const Order = models?.Order ||model('Order' , OrderSchema)