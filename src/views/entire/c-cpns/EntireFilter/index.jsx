import React, { memo, useState } from 'react';

import EntireFilterWrapper from './style';
import filterData from '@/assets/data/filter_data.json';

const EntireFilter = memo((props) => {
  const [selectItems, setSelectItems] = useState([]);

  function itemClickHandle(item) {
    const newItems = [...selectItems];
    if (!newItems.includes(item)) {
      newItems.push(item);
    } else {
      const itemIndex = newItems.indexOf(item);
      newItems.splice(itemIndex, 1);
    }
    setSelectItems(newItems);
  }

  return (
    <EntireFilterWrapper>
      <div className="filter_outer">
        <div className="filter">
          {filterData.map((item, index) => (
            <div
              className={
                'itemBtn ' +
                (selectItems.includes(item) === true ? 'active' : '')
              }
              key={index}
              onClick={(e) => itemClickHandle(item)}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </EntireFilterWrapper>
  );
});

export default EntireFilter;
