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
import { CustomSpeed } from '../components/sections/custom-speed';
import { Speed } from '../components/examples/speed';
import { CustomHeight } from '../components/sections/custom-height';
import { DisableUserAgents } from '../components/sections/disable-user-agents';
import { Exclude } from '../components/examples/exclude';
import { CustomDirection } from '../components/sections/custom-direction';
import { Direction } from '../components/examples/direction';
import { CustomEffectType } from '../components/sections/custom-effect-type';
import { Video } from '../components/examples/video';
import { CustomElements } from '../components/sections/custom-elements';

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
        <CustomSpeed />
        <Speed />
        <CustomHeight />
        <DisableUserAgents />
        <Exclude />
        <CustomDirection />
        <Direction />
        <CustomEffectType />
        <Video />
        <CustomElements />
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
