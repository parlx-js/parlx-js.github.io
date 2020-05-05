import React from 'react';
import styled from 'styled-components';

const PreviewWrapper = styled.article`
  margin: 30px auto;
  max-width: ${({ theme }) => theme.breakpoints.lg};
  width: calc(100% - 40px);

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin: 50px auto;
    width: calc(100% - 50px);
  }
`;

const PreviewTitle = styled.h3`
  margin: 8px 0;
  text-transform: uppercase;
  font-weight: 900;
  font-size: 2.2rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 3rem;
  }
`;

const PreviewContent = styled.div`
  p {
    font-size: 1.8rem;
  }

  .gatsby-highlight {
    pre {
      background-color: ${({ theme }) => theme.colors.code};

      code {
        font-family: ${({ theme }) => theme.font.family.code};
      }
    }
  }
`;

const Preview: React.FC<any> = ({ data }) => (
  <PreviewWrapper>
    <PreviewTitle>{data.frontmatter.title}</PreviewTitle>

    <PreviewContent dangerouslySetInnerHTML={{ __html: data.html }} />
  </PreviewWrapper>
);

export default Preview;
