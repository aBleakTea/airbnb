import React, { memo, useCallback } from 'react';
import EntirePaginationWrapper from './style';

import Pagination from '@mui/material/Pagination';
import { useDispatch } from 'react-redux';
import { fetchRoomListData } from '@/store/modules/entire';

const EntirePagination = memo((props) => {
  const { currentPage = 0, totalCount } = props;
  const calTotalCount =
    totalCount / 20 > Number.parseInt(totalCount / 20)
      ? Number.parseInt(totalCount / 20) + 1
      : Number.parseInt(totalCount / 20);

  //事件处理逻辑
  const dispatch = useDispatch();
  const handleChange = useCallback(
    (event, count) => {
      dispatch(fetchRoomListData(count - 1));
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
    [dispatch],
  );

  return (
    <EntirePaginationWrapper>
      <div className="pagination">
        <Pagination count={calTotalCount} onChange={handleChange} />
        <div className="pagi_desc">
          第{currentPage * 20 + 1}-{(currentPage + 1) * 20}个房源，共超过
          {totalCount}个
        </div>
      </div>
    </EntirePaginationWrapper>
  );
});

export default EntirePagination;
