import styled from 'styled-components';

const SectionWrapper = styled.div`
  margin: 10px;
  display: flex;
  align-items: center;

  .headContent {
    .title {
      font-weight: 600;
    }
    div {
      margin: 15px auto;
    }
  }

  .rightArrow {
    display: none;
    margin-left: 20px;
    transition: display 200ms ease;
  }
  &:hover .rightArrow {
    display: block;
  }
`;

export default SectionWrapper;
