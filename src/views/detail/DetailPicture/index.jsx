import PictureBrowser from '@/base-ui/pictureBrowser';
import { isEmptyObject } from '@/utils/is-empty-object';
import React, { memo, useState } from 'react';
import DPictureWrapper from './style';

const DetailPicture = memo((props) => {
  const { detailInfo } = props;
  const [showBrowser, setShowBrowser] = useState(false);

  return (
    <DPictureWrapper>
      <div className="pictures">
        <div className="rightPic">
          <div className="picItem">
            <img src={detailInfo?.picture_urls?.[0]} alt="" />
            <div className="picCover"></div>
          </div>
        </div>
        <div className="leftPic">
          {detailInfo?.picture_urls?.slice(1, 5).map((item, index) => {
            return (
              <div className="picItem" key={index}>
                <img src={item} alt="" />
                <div className="picCover"></div>
              </div>
            );
          })}
        </div>
        <div className="showBtn" onClick={(e) => setShowBrowser(true)}>
          <button>查看图片</button>
        </div>
      </div>

      {showBrowser && isEmptyObject(detailInfo) && (
        <PictureBrowser
          picture_urls={detailInfo.picture_urls}
          setShowBrowser={setShowBrowser}
        />
      )}
    </DPictureWrapper>
  );
});

export default DetailPicture;
