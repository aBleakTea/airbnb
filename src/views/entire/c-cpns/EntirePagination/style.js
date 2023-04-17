import styled from 'styled-components';

const EntirePaginationWrapper = styled.div`
  display: flex;
  justify-content: center;

  .pagination {
    display: flex;
    flex-direction: column;
    align-items: center;

    .MuiPaginationItem-root.Mui-selected {
      background-color: black;
      color: white;
    }

    .MuiPaginationItem-root {
      margin: 0 3px;
      &:hover {
        text-decoration: underline;
      }
    }

    .pagi_desc {
      margin-top: 15px;
    }
  }
`;

export default EntirePaginationWrapper;
