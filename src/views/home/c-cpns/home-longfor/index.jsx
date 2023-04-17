import ScrollView from '@/base-ui/scroll-view';
import SectionHeader from '@/components/section-header';
import React, { memo } from 'react';
import LongForWrapper from './style';

const HomeLongFor = memo((props) => {
  const { getInfo } = props;

  return (
    <LongForWrapper>
      <SectionHeader title={getInfo.title} subtitle={getInfo.subtitle} />
      <ScrollView>
        {getInfo.list?.map((item, index) => (
          <div className="longforItem" key={index}>
            <img src={item.picture_url} alt="" />
            <div className="info">
              <div className="city">{item.city}</div>
              <div className="price">均价 {item.price}</div>
            </div>
          </div>
        ))}
      </ScrollView>
    </LongForWrapper>
  );
});

export default HomeLongFor;
