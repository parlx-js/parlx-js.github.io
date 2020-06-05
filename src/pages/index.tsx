import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';

import Header from '../containers/header';
import Preview from '../containers/preview';

import { HomePageQuery } from '../../graphql-types';

interface Props {
  readonly data: HomePageQuery;
}

const Main = styled.main``;

const HomePage: React.FC<Props> = ({ data }) => {
  const { site, allMarkdownRemark } = data;

  const { title, description } = site.siteMetadata;

  return (
    <Layout>
      <SEO title={title} description={description} />

      <Header title={title} />

      <Main>
        {allMarkdownRemark.nodes.map(({ frontmatter, html, id }) => (
          <Preview title={frontmatter.title} content={html} key={id} />
        ))}
      </Main>
    </Layout>
  );
};

export const query = graphql`
  query HomePage {
    site {
      siteMetadata {
        title
        description
      }
    }

    allMarkdownRemark(sort: { order: ASC, fields: frontmatter___order }) {
      nodes {
        id
        frontmatter {
          title
        }
        html
      }
    }
  }
`;

export default HomePage;
