import { fetchHomeDataAction } from '@/store/modules/home';
import React, { memo, useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

import HomeBanner from './c-cpns/home-banner';
import HomeWrapper from './style';
import HomeSectionV1 from './c-cpns/HomeSectionV1';
import HomeSectionV2 from './c-cpns/HomeSectionV2';
import HomeSectionV3 from './c-cpns/HomeSectionV3';
import { isEmptyObject } from '@/utils/is-empty-object';
import AppHeader from '@/components/app-header';
import HomeLongFor from './c-cpns/home-longfor';
import { changeHeaderConfigAction } from '@/store/modules/main';

const Home = memo(() => {
  const {
    goodPriceInfo,
    highScoreInfo,
    discountData,
    recomendInfo,
    longForInfo,
    plusInfo,
  } = useSelector((state) => {
    return {
      goodPriceInfo: state.home.goodPriceInfo,
      highScoreInfo: state.home.highScoreInfo,
      discountData: state.home.discountData,
      recomendInfo: state.home.recomendInfo,
      longForInfo: state.home.longForInfo,
      plusInfo: state.home.plusInfo,
    };
  }, shallowEqual);

  //获取异步请求
  const dispatch = useDispatch();
  useEffect(() => {
    //获取Home异步信息
    dispatch(fetchHomeDataAction());
    //更改首页头部固定定位
    dispatch(changeHeaderConfigAction({ isFixed: true, topAlpha: true }));
  }, [dispatch]);

  return (
    <div>
      <HomeWrapper>
        <AppHeader />
        <HomeBanner />
        <div className="content">
          {/* 展示向往数据 */}
          {isEmptyObject(longForInfo) && <HomeLongFor getInfo={longForInfo} />}
          {/* 展示推荐数据 */}
          {isEmptyObject(recomendInfo) && (
            <HomeSectionV2 getInfo={recomendInfo} />
          )}
          {/* 展示折扣数据 */}
          {isEmptyObject(discountData) && (
            <HomeSectionV2 getInfo={discountData} />
          )}
          {/* 展示高性价比数据 */}
          {isEmptyObject(goodPriceInfo) && (
            <HomeSectionV1 getInfo={goodPriceInfo} />
          )}
          {/* 展示高评分数据 */}
          {isEmptyObject(highScoreInfo) && (
            <HomeSectionV1 getInfo={highScoreInfo} />
          )}
          {/*展示plus房源 */}
          {isEmptyObject(plusInfo) && <HomeSectionV3 getInfo={plusInfo} />}
        </div>
      </HomeWrapper>
    </div>
  );
});

export default Home;
