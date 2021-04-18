import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useViewport } from 'react-viewport-hooks';

import * as S from './header.styles';
import { HeaderQuery } from '../../../graphql-types';

type Props = {
  readonly title: string;
};

const Header = ({ title }: Props) => {
  const { vh } = useViewport({ defaultVH: window?.innerHeight });

  const [opacity, setOpacity] = useState(1);

  const data = useStaticQuery<HeaderQuery>(query);

  return (
    <S.Wrapper>
      <S.Parallax
        settings={{ height: vh, speed: -0.3 }}
        parlxMove={(e) => setOpacity(1 - e / 80)}
        overlay
      >
        <S.Background
          className="parlx-children"
          fluid={data.file.childImageSharp.fluid}
        />

        <S.Content opacity={opacity}>
          <S.Title>{title}</S.Title>

          <S.SubTitle>
            Parallax effect library for:
            <br />
            JS, TS, React and jQuery
          </S.SubTitle>

          <S.GithubLink href="https://github.com/parlx-js/parlx.js">
            <S.Icon icon={faGithub} />
            See on GitHub
          </S.GithubLink>
        </S.Content>
      </S.Parallax>
    </S.Wrapper>
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
