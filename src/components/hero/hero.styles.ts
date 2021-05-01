import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import ReactParlx from 'react-parlx';
import Img from 'gatsby-image';

export const Wrapper = styled.header`
  overflow: hidden;
`;

export const Content = styled.div<{ opacity: number }>`
  z-index: 10;
  position: absolute;
  padding: 16px; /* TODO rem */ /* TODO rem */
  opacity: ${({ opacity }) => opacity};
`;

export const Title = styled.h1`
  font-size: 6rem;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  font-weight: 900;
  margin: 8px 0; /* TODO rem */

  @media (min-width: 980px) {
    /* TODO rem, size to var */
    font-size: 11rem;
  }
`;

export const SubTitle = styled.h2`
  margin: 10px 0; /* TODO rem */
  font-weight: 400;
  font-size: 2.4rem;

  @media (min-width: 980px) {
    /* TODO rem, size to var */
    font-size: 3.6rem;
    margin: 12px auto; /* TODO rem */
  }
`;

export const GithubLink = styled.a`
  text-transform: uppercase;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.3);
  transition: transform 200ms ease-in-out, box-shadow 200ms ease-in-out;
  background-color: #fff;
  color: #7d42f4;
  display: inline-block;
  font-weight: 700;
  font-size: 22px; /* TODO rem */
  text-decoration: none;
  border-radius: 4px; /* TODO rem */
  padding: 12px 22px; /* TODO rem */
  margin: 18px 0; /* TODO rem */

  :active {
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0);
    transform: scale(0.96);
  }
`;

export const Icon = styled(FontAwesomeIcon)`
  width: 22px; /* TODO rem */
  height: 22px; /* TODO rem */
  margin-right: 10px; /* TODO rem */
`;

export const Background = styled(Img)`
  z-index: -1;
`;

export const Parallax = styled(ReactParlx)`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  .overlay {
    opacity: 0.8;
    position: absolute;
    background: linear-gradient(
      135deg,
      ${({ theme }) => theme.colors.primary} 0%,
      ${({ theme }) => theme.colors.secondary} 100%
    );
  }

  ${Background},
  .overlay {
    width: 100%;
    height: 100%;
  }
`;
