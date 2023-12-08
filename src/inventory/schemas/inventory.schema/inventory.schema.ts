import * as mongoose from 'mongoose';

export const InventorySchema = new mongoose.Schema({
  productId: mongoose.Schema.Types.ObjectId,
  locationId: mongoose.Schema.Types.ObjectId,
  quantity: Number,
});