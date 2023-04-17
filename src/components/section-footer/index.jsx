import IconMoreArrow from '@/assets/svg/icon-more-arrow';
import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import SecFooterWrapper from './style';

const SectionFooter = memo((props) => {
  const { name } = props;

  //获取重定向组件
  const navigate = useNavigate();
  function handleMoreClick() {
    navigate('/entire');
  }

  let showMessage = '显示全部';
  if (name != null) {
    showMessage = `查看更多${name}房源`;
  }

  return (
    <SecFooterWrapper color={name ? '#00848A' : '#000'}>
      <div className="info" onClick={(e) => handleMoreClick()}>
        <span className="text">{showMessage}</span>
        <IconMoreArrow />
      </div>
    </SecFooterWrapper>
  );
});

export default SectionFooter;
