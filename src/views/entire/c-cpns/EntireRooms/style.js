import styled from 'styled-components';

const EntireRoomsWrapper = styled.div`
  padding: 20px 30px;
  position: relative;
  margin: 80px;

  .title {
    margin-left: 7px;
    font-size: 22px;
    font-weight: 700;
    color: #222;
  }

  .entire_rooms {
    margin-top: 15px;
    display: flex;
    flex-wrap: wrap;
  }
  .rooms_cover {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(255, 255, 255, 0.8);
  }
`;

export default EntireRoomsWrapper;
