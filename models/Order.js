const { Schema, model, models } = require("mongoose");

const OrderSchema = new Schema({
  list_items: Object,
  name,
  email,
  city,
  address,
  postalCode,
  country,
  paid: Boolean,
});

export const Order = models?.Order ||model('Order' , OrderSchema)