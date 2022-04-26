import { Schema } from 'mongoose';
import mongoose from '../../node_modules/mongoose/types/index';

const MeetingsSchema = new Schema({
  order: Number,
  endedAt: Date,
  startedAt: Date,
});

const ClubSchema = new Schema({
  id: String,
  name: String,
  type: String,
  place: String,
  converUrl: String,
  meetings: [MeetingsSchema],
  description: String,
});

const ConnectionSchema = new Schema({
  name: String,
});

const ProductSchema = new Schema({
  club: ClubSchema,
  price: Number,
  leaders: [ConnectionSchema],
  leaders: [ConnectionSchema],
});

const Product = mongoose.model('Product', ProductSchema);

export default Product;
