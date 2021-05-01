import styled from 'styled-components';

export const Preview = styled.section`
  margin: 2px auto; /* TODO rem */
  display: flex;
  flex-wrap: wrap;
  align-items: space-between;

  /* TODO */
  > div:nth-child(2) {
    margin-top: 2px; /* TODO rem */
  }

  /* TODO */
  @media (min-width: 740px) {
    /* TODO rem, size to var */
    flex-wrap: nowrap;

    > div {
      flex: 1;
    }

    > div:nth-child(2) {
      margin-top: 0;
      margin-left: 2px; /* TODO rem */
    }
  }
`;
