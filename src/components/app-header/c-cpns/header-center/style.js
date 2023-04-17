import styled from 'styled-components';

export const CenterWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 48px;

  .searchBar {
    position: absolute;
    display: flex;
    width: 300px;
    height: 48px;
    padding: 0 8px;
    border: 1px solid #ddd;
    border-radius: 24px;
    box-sizing: border-box;
    align-items: center;
    justify-content: space-between;
    ${(props) => props.theme.mixin.boxShadow};

    .text {
      padding: 0 16px;
      color: ${(props) => (props.theme.isAlphaO ? '#fff' : '#222')};
      font-weight: 600px;
    }

    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 38px;
      width: 38px;
      border-radius: 50%;
      background-color: ${(props) => props.theme.color.primaryColor};
      color: white;
      font-size: 20px;
    }
  }

  .search_detail {
    position: absolute;
    transform-origin: 50% 0;
    will-change: transform, opacity;

    .infos {
      position: absolute;
      top: 60px;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  .detail-exit {
    transform: scale(1) translateY(0);
    opacity: 1;
  }
  .detail-exit-active {
    opacity: 0;
    transform: scale(0.35, 0.727273) translateY(-58px);
    transition: all 250ms ease;
  }
  .detail-enter {
    opacity: 0;
    transform: scale(0.35, 0.727273) translateY(-58px);
  }
  .detail-enter-active {
    transform: scale(1) translateY(0);
    opacity: 1;
    transition: all 250ms ease;
  }

  .bar-exit {
    opacity: 0;
  }
  .bar-enter {
    opacity: 0;
    transform: scale(2.85714, 1.375) translateY(58px);
  }
  .bar-enter-active {
    transform: scale(1, 0) translateY(0);
    opacity: 1;
    transition: all 250ms ease;
  }
`;
