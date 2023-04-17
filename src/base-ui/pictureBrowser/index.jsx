import { CSSTransition, SwitchTransition } from 'react-transition-group';
import React, { memo, useEffect, useState } from 'react';

import PicBrowserWrapper from './style';
import IconArrowLeft from '@/assets/svg/icon-arrow-left';
import IconArrowRight from '@/assets/svg/icon-arrow-right';
import IconClose from '@/assets/svg/Icon_close';
import IconTriangleArrowDown from '@/assets/svg/icon-triangle-arrow_down';
import Indicator from '../indicator';
import IconTriangleArrowUp from '@/assets/svg/icon-triangle-arrow_up';

const PictureBrowser = memo((props) => {
  const { picture_urls, setShowBrowser } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isNext, setIsNext] = useState(true);
  const [showList, setShowList] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  //关闭图片浏览页
  function closeBtnClickHandle() {
    setShowBrowser(false);
  }
  //左右切换轮播图
  function controlClickHandle(e, isNext = true) {
    e.stopPropagation();
    let newIndex = isNext ? currentIndex + 1 : currentIndex - 1;
    if (newIndex < 0) newIndex = picture_urls.length - 1;
    if (newIndex > picture_urls.length - 1) newIndex = 0;
    setCurrentIndex(newIndex);
    setIsNext(isNext);
  }

  function handleSmallPicClick(index) {
    setIsNext(index < currentIndex ? false : true);
    setCurrentIndex(index);
  }

  return (
    <PicBrowserWrapper isNext={isNext} showList={showList}>
      <div className="top">
        <div className="close_btn" onClick={(e) => closeBtnClickHandle()}>
          <IconClose />
        </div>
      </div>
      <div className="slider">
        {/*控制按钮*/}
        <div className="slider_control">
          <div
            className="slider_btn slider_left"
            onClick={(e) => controlClickHandle(e, false)}
          >
            <IconArrowLeft width="100" height="150" />
          </div>
          <div
            className="slider_btn slider_right"
            onClick={(e) => controlClickHandle(e, true)}
          >
            <IconArrowRight width="100" height="150" />
          </div>
        </div>

        {/* 当页主图 */}
        <div className="slide_picture">
          <SwitchTransition>
            <CSSTransition
              key={picture_urls[currentIndex]}
              classNames="slide_pic"
              timeout={300}
            >
              <img src={picture_urls[currentIndex]} alt="" />
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>

      <div className="preview">
        <div className="info">
          <div className="desc">
            <div className="count">
              <span>
                {currentIndex + 1}/{picture_urls.length} :&nbsp;
              </span>
              <span>room Apartment 图片{currentIndex + 1}</span>
            </div>
            <div className="toggle" onClick={(e) => setShowList(!showList)}>
              <span>隐藏图片列表</span>
              {showList ? <IconTriangleArrowUp /> : <IconTriangleArrowDown />}
            </div>
          </div>
          <div className="preview_list">
            {
              <Indicator selectIndex={currentIndex}>
                {picture_urls?.map((item, index) => {
                  return (
                    <div
                      className={
                        'pre_item ' + (currentIndex === index ? 'active' : '')
                      }
                      key={index}
                      onClick={(e) => handleSmallPicClick(index)}
                    >
                      <img src={item} alt="" />
                    </div>
                  );
                })}
              </Indicator>
            }
          </div>
        </div>
      </div>
    </PicBrowserWrapper>
  );
});

export default PictureBrowser;
