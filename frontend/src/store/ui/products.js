import { createSlice } from '@reduxjs/toolkit';
import { pick } from 'lodash';

const allowedTypes = ['Bakery', 'Dairy', 'Seafood', 'Meat', 'Beverage', 'Floral', 'Prepared Food', 'Vegetables', 'Pet Care', 'Baby Items', 'Household', 'Snacks', 'Medicine'].map((type) => ({
  key: type,
  label: type,
}));

const initialState = {
  formData: {
    name: '',
    type: '',
    measurement_unit: '',
    markup_price: 0,
    exp_date: '',
    manufactured_date: '',
    description: '',
    stock: 5,
    image: '',
  },
  filters: [
    { key: 'name', label: 'Name' },
    {
      key: 'type',
      label: 'Type',
      options: allowedTypes,
    },
    { key: 'measurement_unit', label: 'Unit' },
    { key: 'description', label: 'Description' },
  ],
  sorts: [
    {
      key: 'selling_price',
      label: 'Sort by price',
      direction: 0,
    },
    {
      key: 'stock',
      label: 'Sort by availability',
      direction: 0,
    },
  ],
  allowedTypes,
};

export const slice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setFormData(state, action) {
      state.formData = pick(action.payload, ['name', 'type', 'description', 'stock', 'measurement_unit', 'markup_price', 'exp_date', 'manufactured_date', 'image']);
    },
  },
});

export const { setFormData } = slice.actions;

export default slice.reducer;
