import React, { memo, useCallback, useState } from 'react';

import RoomsWrapper from './style';
import SectionHeader from '@/components/section-header';
import SectionRooms from '@/components/section-rooms';
import SectionTabs from '@/components/section-tabs';
import SectionFooter from '@/components/section-footer';

const HomeSectionV2 = memo((props) => {
  const { getInfo } = props;
  //定义当前选择的数据
  const initialName = Object.keys(getInfo.dest_list)[0];
  const [selectedName, setSelectedName] = useState(initialName);
  //城市列表
  const tabNames = getInfo.dest_address?.map((item) => item.name);

  //点击切换回调函数
  const tabClickHandle = useCallback(function (index, name) {
    setSelectedName(name);
  }, []);

  return (
    <RoomsWrapper>
      <div className="discount">
        <SectionHeader title={getInfo.title} subtitle={getInfo.subtitle} />
        <SectionTabs tabsList={tabNames} tabClick={tabClickHandle} />
        <SectionRooms
          infoList={getInfo.dest_list?.[selectedName]}
          itemWidth="33.3%"
        />
        <SectionFooter name={selectedName} />
      </div>
    </RoomsWrapper>
  );
});

export default HomeSectionV2;
