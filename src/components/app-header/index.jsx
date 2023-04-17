import React, { memo, useRef, useState } from 'react';
import { HeaderWrapper, SearchArea } from './style';
import HeaderLeft from './c-cpns/header-left';
import HeaderCenter from './c-cpns/header-center';
import HeaderRight from './c-cpns/header-right';
import { shallowEqual, useSelector } from 'react-redux';
import useScrollPosition from '@/hooks/useScrollPosition';
import { ThemeProvider } from 'styled-components';

const AppFooter = memo((props) => {
  const { headerConfig } = useSelector(
    (state) => ({
      headerConfig: state.main.headerConfig,
    }),
    shallowEqual,
  );
  const { isFixed } = headerConfig;
  //定义搜索状态
  const [isSearch, setIsSearch] = useState(false);

  //监听滚动
  const { scrollY } = useScrollPosition();
  //当滚动超过一定距离后,搜索框状态关闭
  const preY = useRef(0);
  if (!isSearch) {
    preY.current = scrollY;
  }
  if (isSearch && Math.abs(scrollY - preY.current) > 30) {
    setIsSearch(false);
  }
  //设置头部的透明度，当滚动位于零且设置透明度时才改变透明度
  const isAlphaO = headerConfig.topAlpha && scrollY === 0;

  //更改搜索状态
  function changeSearchStatus() {
    setIsSearch(!isSearch);
  }

  return (
    <ThemeProvider theme={{ isAlphaO }}>
      <HeaderWrapper isFixed={isFixed}>
        <div className="headArea">
          <div className="headContent">
            <HeaderLeft />
            <HeaderCenter
              isSearch={isSearch}
              changeSearchStatus={changeSearchStatus}
            />
            <HeaderRight />
          </div>
          <SearchArea isSearch={isSearch}></SearchArea>
        </div>
        {isSearch && (
          <div className="restCover" onClick={(e) => setIsSearch(false)}></div>
        )}
      </HeaderWrapper>
    </ThemeProvider>
  );
});

export default AppFooter;
