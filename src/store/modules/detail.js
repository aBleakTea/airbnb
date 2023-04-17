import { createSlice } from '@reduxjs/toolkit';

const detailSlice = createSlice({
  name: 'detail',
  initialState: {
    detailInfo: {},
  },
  reducers: {
    changeDetailInfoAction(state, { payload }) {
      state.detailInfo = payload;
    },
  },
});

const { changeDetailInfoAction } = detailSlice.actions;
export { changeDetailInfoAction };

export default detailSlice.reducer;
