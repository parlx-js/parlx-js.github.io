import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

import Header from '../containers/header';
import Doc from '../containers/doc';
import Preview from '../containers/preview';

import { HomePageQuery } from '../../graphql-types';

interface Props {
  data: HomePageQuery;
}

const HomePage: React.FC<Props> = ({ data }) => {
  const { title, description } = data.site.siteMetadata;

  return (
    <Layout>
      <SEO title={title} description={description} />

      <Header background={data} />

      <main>
        <Doc />

        <Preview />
      </main>
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

    file(relativePath: { eq: "images/mountains.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default HomePage;
