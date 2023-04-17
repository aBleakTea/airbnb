import { isEmptyObject } from '@/utils/is-empty-object';
import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DetailInfo from './DetailInfo';
import DetailPicture from './DetailPicture';
import DetailWrapper from './style';
import AppHeader from '@/components/app-header';
import { changeHeaderConfigAction } from '@/store/modules/main';

const Detail = memo(() => {
  const { detailInfo } = useSelector((state) => ({
    detailInfo: state.detail.detailInfo,
  }));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeHeaderConfigAction({ isFixed: false, topAlpha: false }));
  }, [dispatch]);

  return (
    <DetailWrapper>
      <AppHeader />
      {isEmptyObject(detailInfo) && <DetailPicture detailInfo={detailInfo} />}
      {isEmptyObject(detailInfo) && <DetailInfo detailInfo={detailInfo} />}
    </DetailWrapper>
  );
});

export default Detail;
