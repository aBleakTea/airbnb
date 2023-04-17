import styled from 'styled-components';

const SecFooterWrapper = styled.div`
  display: flex;
  margin-top: 10px;
  align-items: center;

  .info {
    font-weight: 600;
    font-size: 17px;
    color: ${(props) => props.color};
    cursor: pointer;

    .text {
      margin-right: 8px;
    }
  }

  &:hover {
    text-decoration-line: underline;
  }
`;

export default SecFooterWrapper;
