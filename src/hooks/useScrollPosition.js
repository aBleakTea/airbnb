import { useEffect, useState } from 'react';
import { throttle } from 'underscore';

export default function useScrollPosition() {
  //状态记录位置
  const [scrollX, setscrollX] = useState(0);
  const [scrollY, setscrollY] = useState(0);

  //监听window滚动
  useEffect(() => {
    const handleScroll = throttle(function () {
      setscrollX(window.scrollX);
      setscrollY(window.scrollY);
    }, 200);

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  //返回
  return { scrollX, scrollY };
}
