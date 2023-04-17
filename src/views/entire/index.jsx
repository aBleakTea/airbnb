import { fetchRoomListData } from '@/store/modules/entire/createActions';
import { isEmptyObject } from '@/utils/is-empty-object';
import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import EntireFilter from './c-cpns/EntireFilter';
import EntirePagination from './c-cpns/EntirePagination';
import EntireRooms from './c-cpns/EntireRooms';
import EntireWrapper from './style';
import AppHeader from '@/components/app-header';
import { changeHeaderConfigAction } from '@/store/modules/main';

const Entire = memo(() => {
  const { currentPage, roomList, totalCount } = useSelector(
    (state) => ({
      currentPage: state.entire.currentPage,
      roomList: state.entire.roomList,
      totalCount: state.entire.totalCount,
    }),
    shallowEqual,
  );

  const dispatch = useDispatch();
  useEffect(() => {
    //请求获取roomList
    dispatch(fetchRoomListData());
    //更改首页头部固定定位
    dispatch(changeHeaderConfigAction({ isFixed: true, topAlpha: false }));
  }, [dispatch]);

  return (
    <EntireWrapper>
      <AppHeader />
      <EntireFilter />
      {isEmptyObject(roomList) && (
        <EntireRooms roomList={roomList} totalCount={totalCount} />
      )}
      <EntirePagination currentPage={currentPage} totalCount={totalCount} />
    </EntireWrapper>
  );
});

export default Entire;
