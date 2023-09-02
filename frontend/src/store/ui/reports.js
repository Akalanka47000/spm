import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filters: [
    {
      key: 'status',
      label: 'Status',
      options: [
        {
          key: 'confirmed',
          label: 'Confirmed',
        },
        {
          key: 'paid',
          label: 'Paid',
        }
      ],
    },
  ],
  sorts: [
    {
      key: 'created_at',
      label: 'Sort by creation date',
      direction: 0,
    },
  ],
};

export const slice = createSlice({
  name: 'reports',
  initialState,
  reducers: {},
});

export const {} = slice.actions;

export default slice.reducer;