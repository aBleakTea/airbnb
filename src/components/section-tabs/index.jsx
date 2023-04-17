import ScrollView from '@/base-ui/scroll-view';
import React, { memo, useState } from 'react';
import TabsWrapper from './style';

const SectionTabs = memo((props) => {
  const { tabsList, tabClick } = props;

  //设置当前当前激活状态的索引
  const [currentIndex, setCurrentIndex] = useState(0);

  function itemClickHandle(index, item) {
    tabClick(index, item);
    setCurrentIndex(index);
  }

  return (
    <TabsWrapper>
      <ScrollView>
        {tabsList?.map((item, index) => (
          <div
            className={'tab-item ' + (currentIndex === index ? 'active' : '')}
            key={index}
            onClick={(e) => itemClickHandle(index, item)}
          >
            {item}
          </div>
        ))}
      </ScrollView>
    </TabsWrapper>
  );
});

export default SectionTabs;
