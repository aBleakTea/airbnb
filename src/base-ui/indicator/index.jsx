import React, { memo, useRef, useEffect } from 'react';
import IndicatorWrapper from './style';

const Indicator = memo((props) => {
  const { selectIndex } = props;
  const contentRef = useRef();

  useEffect(() => {
    const selectItem = contentRef.current.children[selectIndex];
    const itemOffset = selectItem.offsetLeft;
    const itemWidth = selectItem.clientWidth;
    const contentWidth = contentRef.current.clientWidth;
    let distance = itemOffset + itemWidth / 2 - contentWidth / 2;

    const totalDistance = contentRef.current.scrollWidth - contentWidth;
    if (distance < 0) distance = 0;
    if (distance >= totalDistance) distance = totalDistance;

    contentRef.current.style.transform = `translateX(${-distance}px)`;
  }, [selectIndex]);

  return (
    <IndicatorWrapper>
      <div className="iContent" ref={contentRef}>
        {props.children}
      </div>
    </IndicatorWrapper>
  );
});

export default Indicator;
