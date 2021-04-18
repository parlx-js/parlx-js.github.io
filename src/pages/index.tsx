import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Header from '../components/header';
import { HomePageQuery } from '../../graphql-types';
import { HowToInstall } from '../components/sections/how-to-install';

const Main = styled.main``;

interface Props {
  readonly data: HomePageQuery;
}

const HomePage = ({ data }: Props) => {
  const { title, description } = data.site.siteMetadata;

  return (
    <Layout>
      <SEO title={title} description={description} />

      <Header title={title} />

      <Main>
        <HowToInstall />
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
  }
`;

export default HomePage;
