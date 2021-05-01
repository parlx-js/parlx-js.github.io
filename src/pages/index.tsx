import React from 'react';
import { graphql, PageProps } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';
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

const HomePage = ({ data }: PageProps<HomePageQuery>) => {
  const { title, description } = data.site.siteMetadata;

  return (
    <Layout>
      <SEO title={title} description={description} />

      <Hero title={title} />

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
