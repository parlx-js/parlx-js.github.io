import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Header from '../components/header';
import { HomePageQuery } from '../../graphql-types';
import { HowToInstall } from '../components/sections/how-to-install';
import { GettingStarted } from '../components/sections/getting-started';
import { AutoInit } from '../components/sections/autoinit';
import { Methods } from '../components/sections/methods';
import { Direction } from '../components/examples/direction';
import { Exclude } from '../components/examples/exclude';
import { Speed } from '../components/examples/speed';
import { Video } from '../components/examples/video';

const Main = styled.main``;

type Props = {
  readonly data: HomePageQuery;
};

const HomePage = ({ data }: Props) => {
  const { title, description } = data.site.siteMetadata;

  return (
    <Layout>
      <SEO title={title} description={description} />

      <Header title={title} />

      <Main>
        <HowToInstall />
        <GettingStarted />
        <AutoInit />
        <Methods />

        <Direction />
        <Exclude />
        <Speed />
        <Video />
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
