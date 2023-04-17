import hyRequest from '..';

export function getGoodPriceInfoData() {
  return hyRequest.get({
    url: '/home/goodprice',
  });
}

export function getHighScoreInfoData() {
  return hyRequest.get({
    url: '/home/highscore',
  });
}

export function getHighDiscountData() {
  return hyRequest.get({
    url: '/home/discount',
  });
}

export function getRecommendData() {
  return hyRequest.get({
    url: '/home/hotrecommenddest',
  });
}

export function getLongforData() {
  return hyRequest.get({
    url: '/home/longfor',
  });
}

export function getHomePlusData() {
  return hyRequest.get({
    url: '/home/plus',
  });
}
