import styled from 'styled-components';

const TabsWrapper = styled.div`
  /* display: flex; */
  text-align: center;

  .tab-item {
    box-sizing: border-box;
    padding: 14px 18px;
    flex-basis: 120px;
    flex-shrink: 0;
    white-space: nowrap;

    margin: 0 10px;
    border: 0.5px solid #d8d8d8;
    border-radius: 3px;
    cursor: pointer;
    ${(props) => props.theme.mixin.boxShadow}

    &:active {
      color: #fff;
      background-color: ${(props) => props.theme.color.secondaryColor};
    }
  }

  .active {
    color: #fff;
    background-color: ${(props) => props.theme.color.secondaryColor};
  }
`;

export default TabsWrapper;
