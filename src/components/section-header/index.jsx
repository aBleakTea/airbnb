import IconMoreArrow from '@/assets/svg/icon-more-arrow';
import React, { memo } from 'react';
import SectionWrapper from './style';

const SectionHeader = memo((props) => {
  const { title, subtitle = '默认子标题的数据' } = props;

  return (
    <SectionWrapper>
      <div className="headContent">
        <h2 className="title">{title}</h2>
        <div className="subtitle">{subtitle}</div>
      </div>

      <div className="rightArrow">
        <IconMoreArrow />
      </div>
    </SectionWrapper>
  );
});

export default SectionHeader;
