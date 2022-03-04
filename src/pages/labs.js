import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import * as React from 'react';
import Layout from '../components/layout';
import { getImage, withArtDirection } from 'gatsby-plugin-image';
import Hero from '../components/labs/hero';
import ImageUnderHero from '../components/imageUnderHero';
import GenesisApps from '../components/labs/genesisApps';
import ImageScreen from '../components/imageScreen';
import WelcomeToLabs from '../components/labs/welcomeToLabs';
import HowToApplyForGrants from '../components/labs/howToApplyForGrants';
import { injectIntl } from 'gatsby-plugin-intl';

const LabsPage = ({ data }) => {
  const heroImage = withArtDirection(getImage(data.heroLarge), [
    {
      media: '(max-width: 640px)',
      image: getImage(data.heroSmall),
    },
  ]);
  const fullscreenImage = withArtDirection(getImage(data.fullscreenLarge), [
    {
      media: '(max-width: 640px)',
      image: getImage(data.fullscreenSmall),
    },
  ]);

  return (
    <>
      <Helmet>
        <title>Labs | Cartesi.io</title>
      </Helmet>
      <Layout>
        <div className='bg-blue-200 pt-20 text-gray-900 lg:pt-24'>
          <Hero />
          <div className='section pt-0'>
            <ImageUnderHero scrollTo='#genesis-apps' image={heroImage} />
          </div>
        </div>
        <GenesisApps />
        <ImageScreen image={fullscreenImage} />
        <WelcomeToLabs />
        <HowToApplyForGrants />
      </Layout>
    </>
  );
};

export const imageQuery = graphql`
  query {
    heroLarge: file(relativePath: { eq: "uploads/005.jpg" }) {
      id
      root
      relativePath
      childImageSharp {
        gatsbyImageData(formats: [AUTO, WEBP], width: 1280)
      }
    }
    heroSmall: file(relativePath: { eq: "uploads/005-mobile.jpg" }) {
      id
      root
      relativePath
      childImageSharp {
        gatsbyImageData(formats: [AUTO, WEBP], width: 768)
      }
    }
    fullscreenLarge: file(relativePath: { eq: "uploads/008.jpg" }) {
      id
      root
      relativePath
      childImageSharp {
        gatsbyImageData(formats: [AUTO, WEBP], width: 1280)
      }
    }
    fullscreenSmall: file(relativePath: { eq: "uploads/008-mobile.jpg" }) {
      id
      root
      relativePath
      childImageSharp {
        gatsbyImageData(formats: [AUTO, WEBP], width: 768)
      }
    }
  }
`;

export default injectIntl(LabsPage);
