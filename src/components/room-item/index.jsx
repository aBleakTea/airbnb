import React, { memo, useRef, useState } from 'react';
import ItemWrapper from './style';

import Rating from '@mui/material/Rating';
import { Carousel } from 'antd';
import IconArrowLeft from '@/assets/svg/icon-arrow-left';
import IconArrowRight from '@/assets/svg/icon-arrow-right';
import Indicator from '@/base-ui/indicator';

const RoomItem = memo((props) => {
  const { itemData, itemWidth, itemClick } = props;
  // 轮播图点点 索引
  const [selectIndex, setSelectIndex] = useState(0);
  // 轮播图ref
  const carous = useRef();

  //左右切换轮播图
  function controlClickHandle(e, isNext = true) {
    e.stopPropagation();
    //切换轮播图点
    const names = itemData.picture_urls;
    let newIndex = isNext ? selectIndex + 1 : selectIndex - 1;
    if (newIndex < 0) newIndex = names - 1;
    if (newIndex >= names.length) newIndex = 0;
    setSelectIndex(newIndex);
    //切换轮播图照片
    isNext ? carous.current.next() : carous.current.prev();
  }

  //页面跳转
  function itemClickHandle() {
    if (itemClick) itemClick();
  }

  return (
    <ItemWrapper itemWidth={itemWidth} onClick={(e) => itemClickHandle(e)}>
      <div className="innerBlock">
        {itemData.picture_urls ? (
          <div className="swiper">
            {/*左右按钮 */}
            <div className="swiper_control">
              <div
                className="swiper_btn swiper_left"
                onClick={(e) => controlClickHandle(e, false)}
              >
                <IconArrowLeft width="30" height="30" />
              </div>
              <div
                className="swiper_btn swiper_right"
                onClick={(e) => controlClickHandle(e, true)}
              >
                <IconArrowRight width="30" height="30" />
              </div>
            </div>
            {/* indicator显示 */}
            <div className="indicator">
              <Indicator selectIndex={selectIndex}>
                {itemData?.picture_urls?.map((item, index) => {
                  return (
                    <div
                      className={
                        'dotWrapper ' + (selectIndex === index ? 'active' : '')
                      }
                      key={index}
                    >
                      <span className="dot"></span>
                    </div>
                  );
                  // <img src={item} alt="" key={index} />;
                })}
              </Indicator>
            </div>
            {/*轮播图 */}
            <Carousel dots={false} ref={carous}>
              {itemData?.picture_urls?.map((item, index) => (
                <div className="swiper_cover" key={index}>
                  <img src={item} className="contentStyle" alt="" />
                </div>
              ))}
            </Carousel>
          </div>
        ) : (
          <div className="cover">
            <img src={itemData.picture_url} alt="" />
          </div>
        )}

        <div className="verify_info">
          {itemData.verify_info.messages.join(' · ')}
        </div>
        <div className="desc">
          <div className="name">{itemData.name}</div>
        </div>
        <div className="price">¥{itemData.price}/晚</div>
        <div className="bottom">
          <Rating
            name="read-only"
            value={itemData.star_rating ?? 5}
            precision={0.5}
            sx={{ fontSize: '14px', marginRight: '-2px' }}
            // getLabelText={itemData.bottom_info.content}
            readOnly
          />
          <span className="count">{itemData.reviews_count}</span>
          {itemData.bottom_info && (
            <span className="extra">·{itemData.bottom_info?.content}</span>
          )}
        </div>
      </div>
    </ItemWrapper>
  );
});

export default RoomItem;
