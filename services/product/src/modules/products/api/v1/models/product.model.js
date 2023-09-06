import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';
import { productTypes } from '@app/constants';

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
      enum: productTypes,
    },
    measurement_unit: {
      type: String,
      required: true,
    },
    markup_price: {
      type: Number,
      required: true,
    },
    exp_date: {
      type: Date,
      required: true,
    },
    manufactured_date: {
      type: Date,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    stock: {
      type: Number,
      required: true,
    },
    seller: {
      type: mongoose.SchemaTypes.ObjectId,
      required: true,
      ref: 'User',
    },
    selling_price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
    },
    reviews: [
      {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Review',
      },
    ],
  },
  {
    versionKey: false,
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
  },
);

ProductSchema.index({ createdAt: 1 });

ProductSchema.plugin(mongoosePaginate);

const Product = mongoose.model('Product', ProductSchema);

Product.syncIndexes();

export { Product };
