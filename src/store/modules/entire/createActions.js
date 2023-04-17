import * as actionTypes from './constants';
import { getEntireRoomList } from '@/services/index';

export const changeCurrentPage = (currentPage) => {
  return {
    type: actionTypes.CHANGE_CURRENT_PAGE,
    currentPage,
  };
};

export const changeTotalCount = (totalCount) => ({
  type: actionTypes.CHANGE_TOTAL_COUNT,
  totalCount,
});

export const changeRoomList = (roomList) => ({
  type: actionTypes.CHANGE_ROOMLIST,
  roomList,
});

export const changeIsLoading = (isLoading) => {
  return {
    type: actionTypes.IS_LOADING,
    isLoading,
  };
};

//获取roomList的异步请求
export const fetchRoomListData = (...args) => {
  return async (dispatch) => {
    dispatch(changeIsLoading(true));
    await getEntireRoomList(args[0]).then((res) => {
      const roomList = res.list;
      const totalCount = res.totalCount;
      dispatch(changeCurrentPage(args[0]));

      dispatch(changeTotalCount(totalCount));
      dispatch(changeRoomList(roomList));
    });
    dispatch(changeIsLoading(false));
  };
};
