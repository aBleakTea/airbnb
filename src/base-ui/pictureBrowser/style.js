import styled from 'styled-components';

const slide_picBrowserWrapper = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #333;
  display: flex;
  flex-direction: column;

  .top {
    position: relative;
    height: 86px;

    .close_btn {
      position: absolute;
      top: 15px;
      right: 25px;
      cursor: pointer;
    }
  }

  .slider {
    flex: 1;
    position: relative;

    .slider_control {
      position: absolute;
      display: flex;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      align-items: center;

      .slider_btn {
        z-index: 99;
        height: 100%;
        width: 15%;
        display: flex;
        align-items: center;
        justify-content: center;

        color: white;
      }

      .slider_right {
        position: absolute;
        right: 0;
      }
      .slider_left {
        position: absolute;
        left: 0;
      }
    }

    .slide_picture {
      position: relative;
      height: 100%;
      overflow: hidden;
      width: 100% !important;
      max-width: 105vh !important;
      margin: 0 auto;

      img {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        height: 100%;
        margin: 0 auto;
      }

      //slide_pic的样式
      .slide_pic-enter {
        transform: translateX(${(props) => (props.isNext ? '100%' : '-100%')});
        opacity: 0;
      }
      .slide_pic-enter-active {
        transform: translateX(0);
        opacity: 1;
        transition: all 200ms;
      }
      .slide_pic-exit {
        opacity: 1;
      }
      .slide_pic-exit-active {
        opacity: 0;
        transition: all 300ms;
      }
    }
  }

  .preview {
    height: 120px;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    position: relative;

    .info {
      position: absolute;
      box-sizing: border-box;
      top: 5px;
      height: 100%;
      max-width: 105vh;
      color: #fff;

      .desc {
        display: flex;
        justify-content: space-between;

        .toggle {
          cursor: pointer;
          margin-right: 20px;
        }
      }

      .preview_list {
        margin-top: 3px;
        overflow: hidden;
        height: ${(props) => (props.showList ? '0' : '100px')};
        transition: height 300ms ease;

        .pre_item {
          margin-right: 20px;
          cursor: pointer;

          img {
            height: 75px;
            opacity: 0.5;
          }

          &.active {
            img {
              opacity: 1;
            }
          }
        }
      }
    }
  }
`;

export default slide_picBrowserWrapper;
