import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import ReactParlx from 'react-parlx';
import Img from 'gatsby-image';

import { HeaderQuery } from '../../graphql-types';

interface Props {
  title: string;
}

const HeaderWrapper = styled.header`
  overflow: hidden;
`;

const HeaderContent = styled.div<{ opacity: number }>`
  z-index: 10;
  position: absolute;
  padding: 16px;
`;

const HeaderTitle = styled.h1`
  font-size: 6rem;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  font-weight: 900;
  margin: 8px 0;

  @media (min-width: 980px) {
    font-size: 11rem;
  }
`;

const HeaderSubTitle = styled.h2`
  margin: 10px 0;
  font-weight: 400;
  font-size: 2.4rem;

  @media (min-width: 980px) {
    font-size: 3.6rem;
    margin: 12px auto;
  }
`;

const HeaderGithubLink = styled.a`
  text-transform: uppercase;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.3);
  transition: transform 200ms ease-in-out, box-shadow 200ms ease-in-out;
  background-color: #fff;
  color: #7d42f4;
  display: inline-block;
  font-weight: 700;
  font-size: 22px;
  text-decoration: none;
  border-radius: 4px;
  padding: 12px 22px;
  margin: 18px 0;

  :active {
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0);
    transform: scale(0.96);
  }
`;

const HeaderIcon = styled(FontAwesomeIcon)`
  width: 22px;
  height: 22px;
  margin-right: 10px;
`;

const HeaderBackground = styled(Img)`
  z-index: -1;
`;

const HeaderParallax = styled(ReactParlx)`
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

  ${HeaderBackground},
  .overlay {
    width: 100%;
    height: 100%;
  }
`;

const Header: React.FC<Props> = ({ title }) => {
  const [height, setHeight] = useState(window.innerHeight);
  const [opacity, setOpacity] = useState(1);

  const data = useStaticQuery<HeaderQuery>(query);

  useEffect(() => {
    window.addEventListener('resize', () => setHeight(window.innerHeight));
  }, []);

  return (
    <HeaderWrapper>
      <HeaderParallax
        settings={{
          height,
          speed: -0.3,
          // base: document.getElementById('root')
        }}
        parlxMove={(e) => setOpacity(1 - e / 80)}
        overlay
      >
        <HeaderBackground
          className="parlx-children"
          fluid={data.file.childImageSharp.fluid}
        />

        <HeaderContent opacity={1}>
          <HeaderTitle>{title}</HeaderTitle>

          <HeaderSubTitle>
            Parallax effect library for:
            <br />
            JS, TS, React and jQuery
          </HeaderSubTitle>

          <HeaderGithubLink href="https://github.com/parlx-js/parlx.js">
            <HeaderIcon icon={faGithub} />
            See on GitHub
          </HeaderGithubLink>
        </HeaderContent>
      </HeaderParallax>
    </HeaderWrapper>
  );
};

export const query = graphql`
  query Header {
    file(relativePath: { eq: "images/mountains.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default Header;
