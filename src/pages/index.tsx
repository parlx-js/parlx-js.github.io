import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';

import Header from '../containers/header';
import Preview from '../containers/preview';

import { HomePageQuery } from '../../graphql-types';

interface Props {
  data: HomePageQuery;
}

const Main = styled.main``;

const HomePage: React.FC<Props> = ({ data }) => {
  const { site, allMdx } = data;

  const { title, description } = site.siteMetadata;

  return (
    <Layout>
      <SEO title={title} description={description} />

      <Header title={title} />

      <Main>
        {allMdx.nodes.map(({ frontmatter, body, id }) => (
          <Preview title={frontmatter.title} content={body} key={id} />
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

    allMdx {
      nodes {
        id
        frontmatter {
          title
        }
        body
      }
    }

    # allMarkdownRemark {
    #   edges {
    #     node {
    #       frontmatter {
    #         title
    #       }
    #       html
    #     }
    #   }
    # }
  }
`;

export default HomePage;
