import styled from 'styled-components';

const ItemWrapper = styled.div`
  flex-shrink: 0;
  width: ${(props) => props.itemWidth};
  padding: 8px;
  box-sizing: border-box;

  .innerBlock {
    .cover {
      position: relative;
      box-sizing: border-box;
      padding: 66.66% 8px 0;
      border-radius: 3px;
      overflow: hidden;

      img {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
      }
    }

    .swiper {
      position: relative;
      cursor: pointer;

      &:hover .swiper_control {
        display: flex;
      }

      .swiper_control {
        position: absolute;
        color: red;
        z-index: 1;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        display: none;
        justify-content: space-between;
        color: #fff;

        .swiper_btn {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;

          &.swiper_right {
            background: linear-gradient(
              to right,
              transparent 0%,
              rgba(0, 0, 0, 0.25) 100%
            );
          }

          &.swiper_left {
            background: linear-gradient(
              to left,
              transparent 0%,
              rgba(0, 0, 0, 0.25) 100%
            );
          }
        }
      }

      .indicator {
        z-index: 9;
        position: absolute;
        bottom: 10px;
        left: 0;
        right: 0;
        margin: auto;
        width: 30%;

        .dotWrapper {
          width: 20%;
          display: flex;
          align-items: center;
          justify-content: center;

          .dot {
            display: block;
            width: 6px;
            height: 6px;
            background-color: #fff;
            border-radius: 50%;

            &.active {
              width: 8px;
              height: 8px;
              background-color: red;
            }
          }
        }
      }

      .contentStyle {
        margin: 0;
        height: 160px;
        width: 100%;
        color: '#fff';
        line-height: 160px;
        text-align: center;
        background-color: #364d79;
      }
    }

    .verify_info {
      margin: 10px 0 5px;
      font-size: 12px;
      font-weight: 700;
      color: ${(props) => props.verifyColor};
    }

    .desc {
      position: relative;
      padding: 14% 0px 0px;

      .name {
        position: absolute;
        top: 0px;
        font-size: 16px;
        font-weight: 700;

        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }

    .price {
      margin: 8px 0;
    }

    .bottom {
      display: flex;
      align-items: center;
      font-size: 12px;
      font-weight: 600;
      color: ${(props) => props.theme.text.primaryColor};

      .count {
        margin: 0 2px 0 4px;
      }
    }
  }
`;

export default ItemWrapper;
