import RoomItem from '@/components/room-item';
import { changeDetailInfoAction } from '@/store/modules/detail';
import React, { memo, useCallback } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import EntireRoomsWrapper from './style';

const EntireRooms = memo((props) => {
  const { roomList, totalCount } = props;
  const { isLoading } = useSelector(
    (state) => ({
      isLoading: state.entire.isLoading,
    }),
    shallowEqual,
  );

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const itemClickHandle = useCallback(
    (item) => {
      dispatch(changeDetailInfoAction(item));
      navigate('/detail');
    },
    [navigate, dispatch],
  );

  return (
    <EntireRoomsWrapper>
      <h2 className="title">共{totalCount}多处住所</h2>
      <div className="entire_rooms">
        {roomList?.map((item) => (
          <RoomItem
            itemData={item}
            itemWidth="20%"
            key={item._id}
            itemClick={(e) => itemClickHandle(item)}
          />
        ))}
      </div>
      {isLoading && <div className="rooms_cover"></div>}
    </EntireRoomsWrapper>
  );
});

export default EntireRooms;
