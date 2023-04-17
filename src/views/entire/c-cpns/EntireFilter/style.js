import styled from 'styled-components';

const EntireFilterWrapper = styled.div`
  height: 48px;
  .filter_outer {
    position: fixed;
    top: 80px;
    z-index: 19;
    left: 0;
    right: 0;
    margin: auto;
    display: flex;
    align-items: center;
    height: 48px;
    padding-left: 16px;
    border-bottom: 1px solid #f2f2f2;
    background-color: #fff;

    .filter {
      display: flex;

      .itemBtn {
        margin: 0 4px 0 8px;
        padding: 6px 12px;
        border: 1px solid #dce0e0;
        border-radius: 4px;
        color: #484848;
        cursor: pointer;

        &.active {
          background-color: #008489;
          border: 1px solid #008489;
          color: #ffffff;
        }
      }
    }
    &::after {
      content: ' ';
      clear: both;
      display: block;
      height: 48px;
    }
  }
`;
export default EntireFilterWrapper;
