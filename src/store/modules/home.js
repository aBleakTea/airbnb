import {
  getGoodPriceInfoData,
  getHighScoreInfoData,
  getHighDiscountData,
  getRecommendData,
  getLongforData,
  getHomePlusData,
} from '@/services';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

//获取home异步数据
export const fetchHomeDataAction = createAsyncThunk(
  'fetchData',
  (payload, { dispatch }) => {
    getGoodPriceInfoData().then((res) => {
      dispatch(changeGoodPriceInfoAction(res));
    });
    getHighScoreInfoData().then((res) => {
      dispatch(changeHighScoreInfoAction(res));
    });
    getHighDiscountData().then((res) => {
      dispatch(changeDiscountInfoAction(res));
    });
    getRecommendData().then((res) => {
      dispatch(changeRecommendInfoAction(res));
    });
    getLongforData().then((res) => {
      dispatch(changeLongForInfoAction(res));
    });
    getHomePlusData().then((res) => {
      dispatch(changePlusInfoAction(res));
    });
  },
);
// //获取高性价比数据
// export const fetchGetGoodPriceInfo = createAsyncThunk(
//   'goodPriceInfo',
//   async () => {
//     const res = await getGoodPriceInfoData();
//     return res;
//   },
// );
// //获取高评分数据
// export const fetchGetHighScoreInfo = createAsyncThunk(
//   'highScoreInfo',
//   async () => {
//     const res = await getHighScoreInfoData();
//     return res;
//   },
// );
// //获取折扣数据
// export const fetchGetDiscountData = createAsyncThunk(
//   'discountData',
//   async () => {
//     const res = await getHighDiscountData();
//     return res;
//   },
// );

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPriceInfo: [],
    highScoreInfo: [],
    discountData: [],
    recomendInfo: [],
    longForInfo: [],
    plusInfo: [],
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload;
    },
    changeHighScoreInfoAction(state, { payload }) {
      state.highScoreInfo = payload;
    },
    changeDiscountInfoAction(state, { payload }) {
      state.discountData = payload;
    },
    changeRecommendInfoAction(state, { payload }) {
      state.recomendInfo = payload;
    },
    changeLongForInfoAction(state, { payload }) {
      state.longForInfo = payload;
    },
    changePlusInfoAction(state, { payload }) {
      state.plusInfo = payload;
    },
  },
});

const {
  changeGoodPriceInfoAction,
  changeDiscountInfoAction,
  changeHighScoreInfoAction,
  changeRecommendInfoAction,
  changeLongForInfoAction,
  changePlusInfoAction,
} = homeSlice.actions;

export default homeSlice.reducer;
