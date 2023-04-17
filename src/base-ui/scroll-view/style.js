import styled from 'styled-components';

const ScrollWrapper = styled.div`
  position: relative;

  .scroll {
    overflow: hidden;

    .scrollContent {
      display: flex;
      transition: transform 250ms ease;
    }
  }

  .control {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 8;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    border: 2px solid #fff;
    background: #fff;
    box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.14);
    cursor: pointer;

    &.left {
      top: 50%;
      left: 10px;
      transform: translate(-50%, -50%);
    }

    &.right {
      right: 10px;
      top: 50%;
      transform: translate(50%, -50%);
    }
  }
`;

export default ScrollWrapper;
