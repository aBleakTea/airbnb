import styled from 'styled-components';

const DPictureWrapper = styled.div`
  position: relative;

  .pictures {
    display: flex;
    height: 600px;
    background-color: #000;

    .picCover {
      opacity: 1 !important;
    }

    .picItem:hover {
      .picCover {
        opacity: 0 !important;
      }
    }

    .leftPic,
    .rightPic {
      width: 50%;
      height: 100%;

      .picItem {
        position: relative;
        height: 100%;
        overflow: hidden;
        cursor: pointer;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;

          transition: transform 0.3s ease-in;
        }

        .picCover {
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.2);
          opacity: 0;
          transition: opacity 200ms ease;
        }

        &:hover {
          img {
            transform: scale(1.1);
          }
        }
      }
    }

    .leftPic {
      display: flex;
      flex-wrap: wrap;

      .picItem {
        width: 50%;
        height: 50%;
        box-sizing: border-box;
        border: 1px solid #000;
      }
    }

    .showBtn {
      position: absolute;
      bottom: 30px;
      right: 30px;

      button {
        display: block;
        width: 90px;
        padding: 5px 0;
        border-radius: 5px;
      }
    }
  }
`;

export default DPictureWrapper;
