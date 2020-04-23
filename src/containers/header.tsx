import React, { useState, useEffect } from 'react';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

import { Parallax } from '../components/parallax';
import { Icon } from '../components/icon';

interface Props {
  background: any;
  siteTitle?: string;
}

const HeaderWrapper = styled.header``;

const HeaderContent = styled.div<{ opacity: number }>`
  z-index: 10;
  position: absolute;
  padding: 16px;
`;

const Title = styled.h1`
  font-size: 6rem;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  font-weight: 900;
  margin: 8px 0;

  @media (min-width: 980px) {
    font-size: 11rem;
  }
`;

const SubTitle = styled.h2`
  margin: 10px 0;
  font-weight: 400;
  font-size: 2.4rem;

  @media (min-width: 980px) {
    font-size: 3.6rem;
    margin: 12px auto;
  }
`;

const GithubLink = styled(Link)`
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

const HeaderParallax = styled(Parallax)`
  .overlay {
    background: linear-gradient(135deg, #01c135 0%, #7d42f4 100%);
    opacity: 0.8;
  }
`;

const Header: React.FC<Props> = ({ background, siteTitle = '' }) => {
  const [height, setHeight] = useState(window.innerHeight);
  const [opacity, setOpacity] = useState(1);

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
        <Img fluid={background.file.childImageSharp.fluid} />

        <HeaderContent opacity={1}>
          <Title>parlx.js</Title>

          <SubTitle>
            Parallax effect library for:
            <br />
            JS, TS, React and jQuery
          </SubTitle>

          <GithubLink to="https://github.com/parlx-js/parlx.js">
            <Icon icon={faGithub} />
            See on GitHub
          </GithubLink>
        </HeaderContent>
      </HeaderParallax>
    </HeaderWrapper>
  );
};

export default Header;
