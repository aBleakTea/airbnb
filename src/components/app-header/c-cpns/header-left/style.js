import styled from 'styled-components';

export const LeftWrapper = styled.div`
  flex: 1;
  color: ${(props) => props.theme.color.primaryColor};
  padding-left: 20px;
  align-items: center;

  .logo {
    //改变鼠标形状
    cursor: pointer;
  }
`;
