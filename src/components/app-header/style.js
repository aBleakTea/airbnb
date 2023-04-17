import styled, { css } from 'styled-components';

export const HeaderWrapper = styled.div`
  border-bottom: 1px solid #eee;
  z-index: 111;
  ${(props) =>
    props.isFixed
      ? css`
          position: fixed;
          z-index: 99;
          top: 0;
          left: 0;
          right: 0;
        `
      : ``}

  .headArea {
    position: relative;
    z-index: 19;
    background-color: ${(props) =>
      props.theme.isAlphaO ? 'rgba(255,255,255,0);color:white' : '#fff'};

    .headContent {
      display: flex;
      align-items: center;
      height: 80px;
    }
  }
  .restCover {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 9;
    background-color: rgba(0, 0, 0, 0.4);
  }
`;
export const SearchArea = styled.div`
  z-index: 111;
  height: ${(props) => (props.isSearch ? '100px' : '0')};
  transition: height 200ms ease;
`;
