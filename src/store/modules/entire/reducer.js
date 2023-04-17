import * as actionTypes from './constants';

const initialState = {
  currentPage: 0, //当前页码
  roomList: [], //房间列表
  totalCount: 0, //总数据
  isLoading: false, //默认未加载
};

function entireReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };
    case actionTypes.CHANGE_ROOMLIST:
      return { ...state, roomList: action.roomList };
    case actionTypes.CHANGE_TOTAL_COUNT:
      return { ...state, totalCount: action.totalCount };
    case actionTypes.IS_LOADING:
      return { ...state, isLoading: action.isLoading };
    default:
      return state;
  }
}

export default entireReducer;
