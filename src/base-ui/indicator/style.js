import styled from 'styled-components';

const IndicatorWrapper = styled.div`
  overflow: hidden;

  & * {
    flex-shrink: 0;
  }

  .iContent {
    display: flex;
    transition: transform 200ms ease;
  }
`;

export default IndicatorWrapper;
