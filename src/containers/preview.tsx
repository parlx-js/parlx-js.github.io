import React from 'react';
import styled from 'styled-components';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
// import Highlight from 'prism-react-renderer';

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

const PreviewContent = styled(MDXRenderer)`
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
        padding: 0 !important;
      }
    }
  }
`;

const Preview: React.FC<any> = ({ title, content }) => (
  <PreviewWrapper>
    <PreviewTitle>{title}</PreviewTitle>

    <MDXProvider>
      <PreviewContent>{content}</PreviewContent>
    </MDXProvider>
  </PreviewWrapper>
);

export default Preview;
