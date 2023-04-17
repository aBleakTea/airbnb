import IconArrowLeft from '@/assets/svg/icon-arrow-left';
import IconArrowRight from '@/assets/svg/icon-arrow-right';
import React, { memo, useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import ScrollWrapper from './style';

const ScrollView = memo((props) => {
  const [showRight, setShowRight] = useState(false);
  const [showLeft, setShowLeft] = useState(true);
  const [curIndex, setCurIndex] = useState(0);
  const [totalDistance, setTotalDistance] = useState(0);

  const scorllContentRef = useRef();
  useEffect(() => {
    let scrollWidth = scorllContentRef.current.scrollWidth;
    let clientWidth = scorllContentRef.current.clientWidth;
    let totalDis = scrollWidth - clientWidth;
    setTotalDistance(totalDis);
    setShowRight(totalDis > 0);
  }, [props.children]);

  //初始化函数
  const handleScrollRight = (direction) => {
    let newIndex = direction ? curIndex + 1 : curIndex - 1;
    newIndex = newIndex < 0 ? 0 : newIndex;
    const newChild = scorllContentRef.current.children[newIndex];
    const newOffSet = newChild.offsetLeft;
    scorllContentRef.current.style.transform = `translate(-${newOffSet}px)`;
    setCurIndex(newIndex);
    //是否继续显示右边按钮
    setShowRight(totalDistance > newOffSet);
    setShowLeft(newOffSet > 0);
  };

  return (
    <ScrollWrapper>
      {showLeft && (
        <div className="control left" onClick={(e) => handleScrollRight(false)}>
          <IconArrowLeft />
        </div>
      )}

      <div className="scroll">
        <div className="scrollContent" ref={scorllContentRef}>
          {props.children}
        </div>
      </div>

      {showRight && (
        <div className="control right" onClick={(e) => handleScrollRight(true)}>
          <IconArrowRight />
        </div>
      )}
    </ScrollWrapper>
  );
});

export default ScrollView;
