import React, { memo } from 'react';

import RoomItem from '../room-item';
import RoomsWrapper from './style';

const SectionRooms = memo((props) => {
  const { infoList, itemWidth } = props;

  return (
    <RoomsWrapper>
      {infoList?.slice(0, 8).map((item) => (
        <RoomItem key={item.id} itemData={item} itemWidth={itemWidth} />
      ))}
    </RoomsWrapper>
  );
});

export default SectionRooms;
