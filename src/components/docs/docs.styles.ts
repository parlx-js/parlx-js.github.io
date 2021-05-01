import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Body = styled.section`
  margin: 30px auto; /* TODO rem */
  max-width: ${({ theme }) => theme.breakpoints.lg};
  width: calc(100% - 40px); /* TODO rem */

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin: 50px auto; /* TODO rem */
    width: calc(100% - 50px); /* TODO rem */
  }
`;

export const Title = styled.h3`
  margin: 8px 0; /* TODO rem */
  text-transform: uppercase;
  font-weight: 900;
  font-size: 2.2rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 3rem;
  }
`;

export const Icon = styled(FontAwesomeIcon)`
  margin-right: 10px; /* TODO rem */
  width: 30px !important; /* TODO */
`;

export const Content = styled.div`
  p {
    font-size: 1.8rem;
    line-height: 1.4;
  }

  a {
    font-weight: 700;
    text-decoration: none;
    background: linear-gradient(
      135deg,
      ${({ theme }) => theme.colors.primary} 0%,
      ${({ theme }) => theme.colors.secondary} 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  code {
    font-family: ${({ theme }) => theme.font.family.code};
    background-color: ${({ theme }) => theme.colors.code} !important;
    padding: 0.1em 0.4em !important;
  }

  .gatsby-highlight {
    pre {
      background-color: ${({ theme }) => theme.colors.code};

      code {
        padding: 0 !important; /* TODO */
      }
    }
  }
`;
