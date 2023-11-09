const { Schema, model, models } = require("mongoose");

const OrderSchema = new Schema({
  line_items: Object,
  name:String,
  email:String,
  city:String,
  address:String,
  postalCode:String,
  country:String,
  paid: Boolean,
},{
  timestamps :true,
});

export const Order = models?.Order ||model('Order' , OrderSchema)