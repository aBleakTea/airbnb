import React, { memo } from 'react';

import RoomsWrapper from './style';
import SectionHeader from '@/components/section-header';
import SectionRooms from '@/components/section-rooms';
import SectionFooter from '@/components/section-footer';

const HomeSectionV1 = memo((props) => {
  const { getInfo } = props;

  return (
    <RoomsWrapper>
      <SectionHeader title={getInfo.title} subtitle={getInfo.subtitle} />
      <SectionRooms infoList={getInfo.list} itemWidth="25%" />
      <SectionFooter />
    </RoomsWrapper>
  );
});

export default HomeSectionV1;
