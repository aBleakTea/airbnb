import styled from 'styled-components';

export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  font-weight: 600;

  .leftBtn {
    position: relative;
    display: flex;
    box-sizing: border-box;

    .btn {
      width: 62px;
      padding: 12px 10px;
      border-radius: 22px;
      cursor: pointer;
      box-sizing: border-box;
      text-align: center;

      &:hover {
        background-color: #f5f5f5;
      }
    }
  }
  .rightBtn {
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 77px;
    height: 42px;
    margin-right: 24px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 25px;
    background-color: #fff;
    color: ${(props) => props.theme.text.primaryColor};
    cursor: pointer;

    ${(props) => props.theme.mixin.boxShadow}

    .panel {
      position: absolute;
      top: 50px;
      background-color: white;
      right: 0px;
      width: 200px;
      box-shadow: 0 0 15px rgba(0, 0, 0, 0.18);
      border-radius: 10px;

      .top {
        padding: 5px 0px;
        border-bottom: 1px solid #dddddd;
      }

      .item {
        height: 40px;
        line-height: 40px;
        padding: 0 16px;

        &:hover {
          background-color: #f5f5f5;
        }
      }
    }
  }
`;
