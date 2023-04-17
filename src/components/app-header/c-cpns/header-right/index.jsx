import IconAvatar from '@/assets/svg/icon_avatar';
import IconGlobal from '@/assets/svg/icon_global';
import IconMenu from '@/assets/svg/icon_menu';
import React, { memo } from 'react';
import { useState, useEffect } from 'react';

import { RightWrapper } from './style';

const HeaderRight = memo(() => {
  const [showPanel, setShowPanel] = useState(false);

  useEffect(() => {
    window.addEventListener('click', () => {
      setShowPanel(false);
    });
  }, []);

  function alertPanel(event) {
    event.stopPropagation();
    setShowPanel(true);
  }

  return (
    <RightWrapper>
      <div className="leftBtn">
        <span className="btn">登录</span>
        <span className="btn">注册</span>
        <span className="btn">
          <IconGlobal />
        </span>
      </div>
      <div className="rightBtn" onClickCapture={(event) => alertPanel(event)}>
        <IconMenu />
        <IconAvatar />
        {showPanel && (
          <div className="panel">
            <div className="top">
              <div className="item">注册</div>
              <div className="item">登录</div>
            </div>
            <div className="bottom">
              <div className="item">爱彼迎房源</div>
              <div className="item">开展体验</div>
              <div className="item">帮助</div>
            </div>
          </div>
        )}
      </div>
    </RightWrapper>
  );
});

export default HeaderRight;
