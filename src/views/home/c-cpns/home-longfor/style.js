import styled from 'styled-components';

const LongForWrapper = styled.div`
  margin-top: 30px;

  .longforItem {
    box-sizing: border-box;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20%;
    flex-shrink: 0;
    margin: auto 8px;
    ${(props) => props.theme.mixin.boxShadow}

    img {
      width: 100%;
    }

    .info {
      position: absolute;
      bottom: 10%;

      text-align: center;
      color: white;

      .city {
        font-weight: 700;
        font-size: 17px;
      }
      .price {
        font-size: 13px;
      }
    }
  }
`;

export default LongForWrapper;
