import IconSearchBar from '@/assets/svg/icon-search-bar';
import React, { memo, useState } from 'react';
import SearchSections from './c-cpns/search-sections';
import SearchTabs from './c-cpns/search-tabs';
import SearchTitles from '@/assets/data/search_titles';
import { CenterWrapper } from './style';

import { CSSTransition } from 'react-transition-group';

const HeaderCenter = memo((props) => {
  const { isSearch, changeSearchStatus } = props;
  const titles = SearchTitles.map((item) => item.title);
  const [tabIndex, setTabIndex] = useState(0);

  function changeSearchClick() {
    if (changeSearchStatus) {
      changeSearchStatus();
    }
  }

  return (
    <CenterWrapper>
      <CSSTransition
        in={!isSearch}
        classNames="bar"
        timeout={250}
        unmountOnExit={true}
      >
        <div className="searchBar" onClick={changeSearchClick}>
          <div className="text">搜索房源和体验</div>
          <div className="icon">
            <IconSearchBar />
          </div>
        </div>
      </CSSTransition>

      <CSSTransition
        in={isSearch}
        classNames="detail"
        timeout={250}
        unmountOnExit={true}
      >
        <div className="search_detail">
          <SearchTabs titles={titles} tabClick={setTabIndex} />
          <div className="infos">
            <SearchSections searchInfos={SearchTitles[tabIndex].searchInfos} />
          </div>
        </div>
      </CSSTransition>
    </CenterWrapper>
  );
});

export default HeaderCenter;
