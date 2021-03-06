import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';

import * as React from 'react';
import Layout from '../components/layout';
import { getImage, withArtDirection } from 'gatsby-plugin-image';
import Hero from '../components/people/hero';
import ImageUnderHero from '../components/imageUnderHero';
import ImageScreen from '../components/imageScreen';
import Meet from '../components/people/meet';
import Contributors from '../components/people/contributors';
import Ambassadors from '../components/people/ambassadors';
import Friends from '../components/people/friends';
import Advisors from '../components/people/advisors';
import { injectIntl } from 'gatsby-plugin-intl';

const PeoplePage = ({ data }) => {
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

  const team = [
    {
      id: '6bc11f85-e85b-4c20-a0e4-fcf82d7366f4',
      categoryName: 'Founders',
      teamMembers: [
        {
          id: 'f80be7e4-1dc3-4849-a5d3-d4d8bc88e87b',
          name: 'Erick de Moura',
          position: 'CEO',
          linkedIn: 'https://www.linkedin.com/in/erickdemoura/',
          image: '',
        },
        {
          id: '0847ad28-147a-40d9-9442-eaa86d94e378',
          name: 'Colin Steil',
          position: 'COO',
          linkedIn: 'https://www.linkedin.com/in/colinsteil/',
          image: '',
        },
        {
          id: '1e3fa33e-364e-475c-a4d9-5cd71d09d2ad',
          name: 'Diego Nehab',
          position: 'Chief Technology Officer',
          linkedIn: 'https://www.linkedin.com/in/diegonehab/',
          image: '',
        },
        {
          id: 'e5fc4d7d-b003-462d-a04e-124c76683e57',
          name: 'Augusto Teixeira',
          position: 'Chief Scientific Officer',
          linkedIn: 'https://www.linkedin.com/in/augusto-teixeira-39a3a8169/',
          image: '',
        },
      ],
    },
    {
      id: '7e0e7d15-02a3-4fdf-a194-61ec9e017502',
      categoryName: 'Technical Team',
      teamMembers: [
        {
          id: '6cc5345a-a779-4c1e-b27a-13e5b9be9b45',
          name: 'Danilo Tuler',
          position: 'Head of Engineering',
          linkedIn: 'https://www.linkedin.com/in/danilotuler/',
          image: '',
        },
        {
          id: '865ac139-c19e-4606-a214-eb058489b2b6',
          name: 'Jonathan Milton',
          position: 'Head of Product',
          linkedIn: 'https://www.linkedin.com/in/milton-jonathan/',
          image: '',
        },
        {
          id: 'c401741d-5cee-451a-85da-7d9c99a26e4a',
          name: 'Joe Nance',
          position: 'Director - Cartesi Labs',
          linkedIn: 'https://www.linkedin.com/in/joe-nance89/',
          image: '',
        },
        {
          id: 'a2038312-765f-4bed-bc29-3832eb262128',
          name: 'Felipe Argento',
          position: 'Lead Blockchain Engineer',
          linkedIn: 'https://www.linkedin.com/in/felipe-argento-ba5494b2/',
          image: '',
        },
        {
          id: '270c62a9-32df-42fa-b7c8-864127b75cb4',
          name: 'Victor Fusco',
          position: 'Lead Software Engineer',
          linkedIn: 'https://www.linkedin.com/in/victorfusco/',
          image: '',
        },
        {
          id: '0189b330-31d0-40e9-8507-8499a95ed1e6',
          name: 'Carlo Fragni',
          position: 'Senior Software Engineer',
          linkedIn: 'https://www.linkedin.com/in/carlo-fragni-6a298920/',
          image: '',
        },
        {
          id: '3abbb02d-ec26-4338-829c-02aac6b182dd',
          name: 'Marcos Pernambuco',
          position: 'Senior Software Engineer',
          linkedIn: 'https://www.linkedin.com/in/marcos-pernambuco-4b80371/',
          image: '',
        },
        {
          id: '9b8ed851-3c5f-484a-b5a3-85a15a355214',
          name: 'Gabriel Quadros Ligneul',
          position: 'Senior Software Engineer',
          linkedIn: 'https://www.linkedin.com/in/gabriel-ligneul/',
          image: '',
        },
        {
          id: '42a041e7-6a22-4295-b62c-709612c84597',
          name: 'Marko Atanasievski',
          position: 'Senior Software Engineer',
          linkedIn: 'https://www.linkedin.com/in/marko-atana',
          image: '',
        },
        {
          id: '05b65b6f-0f37-4c15-a398-c36dda069648',
          name: 'Claudio Da Silva',
          position: 'Project Manager',
          linkedIn: 'https://www.linkedin.com/in/claudio-silva-34931a11/',
          image: '',
        },
        {
          id: '762a1dea-6f92-403a-805f-d1b204cf4f06',
          name: 'Gabriel Barros',
          position: 'Blockchain Engineer',
          linkedIn: 'https://www.linkedin.com/in/gbbabarros/',
          image: '',
        },
        {
          id: '28647ed2-5abd-4a86-bb4e-cb9bcf01386d',
          name: 'Gimer Cervera',
          position: 'Blockchain Engineer',
          linkedIn: 'https://www.linkedin.com/in/gimercervera/',
          image: '',
        },
        {
          id: '1905761d-a89d-4c39-87b4-9f3c92bd7cb7',
          name: 'Zehui Zheng',
          position: 'Blockchain Engineer',
          linkedIn: 'https://www.linkedin.com/in/zehui-zheng-639b1b1b4/',
          image: '',
        },
        {
          id: '4025ba20-8b83-4e71-9a24-be8e6ca05bcc',
          name: 'Gustavo Krieger',
          position: 'Blockchain Engineer',
          linkedIn: 'https://www.linkedin.com/in/gustavo-krieger-a13621102/',
          image: '',
        },
        {
          id: '9f60e79d-9936-4d8b-b0ee-76e7d89fe107',
          name: 'Jay Zhou',
          position: 'Blockchain Engineer',
          linkedIn: 'https://linkedin.com/in/jaysun1218/',
          image: '',
        },
        {
          id: '973faa66-c5cb-4244-81f8-9af229119f6b',
          name: 'Renan Santos',
          position: 'Blockchain Engineer',
          linkedIn: 'https://www.linkedin.com/in/renan-almeida-226490aa',
          image: '',
        },
        {
          id: 'd37fb516-05f2-4b53-8302-b826839255fe',
          name: 'Guilherme Dantas',
          position: 'Blockchain Engineer',
          linkedIn: 'https://www.linkedin.com/in/guidanoli/',
          image: '',
        },
        {
          id: '2b4cd05a-8bd9-4ad0-b82d-57ee80f60e25',
          name: 'Victor Yves',
          position: 'Software Engineer',
          linkedIn: 'https://www.linkedin.com/in/victoryvescrispim/',
          image: '',
        },
        {
          id: '43e56776-610d-442c-8799-7fa7a55a153e',
          name: 'Gabriel Coutinho',
          position: 'Software Engineer',
          linkedIn:
            'https://www.linkedin.com/in/gabriel-coutinho-de-paula-72183a86/',
          image: '',
        },
        {
          id: 'd2f51c5b-3234-46c5-b4a4-e5b63b2bac49',
          name: 'Aleksandr Mikhalevich',
          position: 'Software Engineer',
          linkedIn: 'https://www.linkedin.com/in/alex-mikhalevich-10611671/',
          image: '',
        },
        {
          id: '12fea013-6e9d-4ad7-9221-e51b0f6f0587',
          name: 'Bruno Menezes',
          position: 'Software Engineer',
          linkedIn: 'https://www.linkedin.com/in/brunodmenezes/',
          image: '',
        },
        {
          id: '686539f7-0767-4bbb-85d6-2140ca329887',
          name: 'Enderson Maia',
          position: 'Software Engineer',
          linkedIn: 'https://www.linkedin.com/in/endersonmaia',
          image: '',
        },
        {
          id: '6c7459bb-8145-41ef-86a9-5f5b3ee3b398',
          name: 'Lourival Vieira Neto',
          position: 'Software Engineer',
          linkedIn: 'https://www.linkedin.com/in/lourivalneto',
          image: '',
        },
        {
          id: 'b89fd2f6-3fe0-45cf-bbbf-565dba79cbeb',
          name: 'Stephen Chen',
          position: 'Software Engineer',
          linkedIn: 'https://www.linkedin.com/in/stephen-chen-65624851/',
          image: '',
        },
        {
          id: 'c960fba1-81e6-4a69-9faa-fd58a6550c10',
          name: 'Marcel Moura',
          position: 'Software Engineer',
          linkedIn: 'https://www.linkedin.com/in/marcelmoura/',
          image: '',
        },
        {
          id: 'dab53d0d-0c46-4d07-96a4-892a9cb9bfb6',
          name: 'Marcelo Politzer',
          position: 'Software Engineer',
          linkedIn: 'https://www.linkedin.com/in/marcelo-politzer-couto',
          image: '',
        },
        {
          id: '9f7d99ac-8b7e-417e-9168-3258cb962312',
          name: 'Roman Hodulak',
          position: 'Software Engineer',
          linkedIn: 'https://www.linkedin.com/in/roman-hodulak',
          image: '',
        },
        {
          id: '350d1e28-c2fb-4913-bc65-2500f685651c',
          name: 'Fabiana Cecin',
          position: 'Researcher',
          linkedIn: 'https://www.linkedin.com/in/fabiana-cecin-9983a919a/',
          image: '',
        },
        {
          id: '1da7b0c6-0229-400f-a5b1-674d034a5ef8',
          name: 'Nazim Faour',
          position: 'Technical Writer',
          linkedIn: 'https://www.linkedin.com/in/nazim-faour-17058b120/',
          image: '',
        },
      ],
    },
    {
      id: 'da22e204-4e31-42e2-9ce2-b43f95232335',
      categoryName: 'Business Development',
      teamMembers: [
        {
          id: 'ad4b3fe6-2cdb-453a-be44-212de2395d06',
          name: 'Bruno Maia',
          position: 'Head of Business Development',
          linkedIn: 'https://www.linkedin.com/in/bmaia/',
          image: '',
        },
        {
          id: '946a22ed-b52c-4edd-ae71-745492d9bc83',
          name: 'Maximilian Hatesuer',
          position: 'Business Development Manager',
          linkedIn: 'https://www.linkedin.com/in/maximilian-hatesuer/',
          image: '',
        },
        {
          id: '5cf37528-1e72-4dd7-8c82-9ae96a9b32f7',
          name: 'Vinicius Ribeiro',
          position: 'Head of Expansion',
          linkedIn: 'https://www.linkedin.com/in/viniciusfariasribeiro/',
          image: '',
        },
        {
          id: '0843f70b-f9bb-4604-9ffb-082f3abf1ca7',
          name: 'Ariel Varela',
          position: 'Business Ambassador',
          linkedIn: 'https://www.linkedin.com/in/sandy-ariel-varela/',
          image: '',
        },
      ],
    },
    {
      id: '114dd86d-03c4-44e8-a96f-643a8d3be58f',
      categoryName: 'Marketing & Legal',
      teamMembers: [
        {
          id: '3104f0a4-6323-486e-9119-a18300315f9f',
          name: 'Nathalie Brahler',
          position: 'Head of Marketing',
          linkedIn: 'https://www.linkedin.com/in/nathaliebrahler/',
          image: '',
        },
        {
          id: '8e09bf2c-e36e-4fbd-bd93-4965e9132e8b',
          name: 'Brandon Isaacson',
          position: 'General Counsel',
          linkedIn: 'https://www.linkedin.com/in/bisaacson/',
          image: '',
        },
        {
          id: 'a75e80f4-93a3-4fb1-8d72-a70b40f23436',
          name: 'Jacky Ye',
          position: 'China Marketing Manager',
          linkedIn: 'https://www.linkedin.com/in/jacky-a5b201193/',
          image: '',
        },
        {
          id: '95afe7d5-8c2e-4a8e-8ca7-7155ee416ad3',
          name: 'Karmen Truong',
          position: 'Digital Marketing Manager',
          linkedIn: 'https://www.linkedin.com/in/karmen-truong/',
          image: '',
        },
        {
          id: '3141ee72-836d-425a-8ae8-baf4fecf0e88',
          name: 'Jesseca Dela Pena',
          position: 'HR and Admin Manager',
          linkedIn: 'https://www.linkedin.com/in/jesseca-p-hr/',
          image: '',
        },
        {
          id: '892c2fa9-f5b7-48a3-8060-ea86ae119b5f',
          name: 'Payal Patel',
          position: 'Executive Assistant',
          linkedIn: 'https://www.linkedin.com/in/payal-patel-gurgaon/',
          image: '',
        },
      ],
    },
    {
      id: '2ab9aed6-74fb-4c82-a416-76380475f766',
      categoryName: 'Community Management',
      teamMembers: [
        {
          id: 'aa5ef6e5-8137-4e5f-916f-980a2f9e5b4b',
          name: 'Dinali Jay',
          position: 'Business Community Manager',
          linkedIn: 'https://www.linkedin.com/in/dinalijay/',
          image: '',
        },
      ],
    },
  ];

  const advisors = [
    {
      name: 'Marina Niforos',
      position: [
        'Strategic Advisor',
        'Associate professor at HEC Paris',
        'EU Blockchain Observatory.',
      ],
      linkedIn: 'https://fr.linkedin.com/in/marina-niforos/fr',
    },
    {
      name: 'Serguei Popov, PhD',
      position: ['Senior Advisor', 'Co-Founder of IOTA'],
      linkedIn: 'https://www.linkedin.com/in/serguei-popov-631bb762/',
    },
    {
      name: 'William Bao Bean',
      position: [
        'General Partner at SOSV',
        'Managing Director at Chinaccelerator',
        'Managing Director at MOX',
      ],
      linkedIn: 'https://www.linkedin.com/in/williambaobean/',
    },

    {
      name: 'Luiz Henrique De Figueiredo, PhD',
      position: ['Co-creator of Lua programming language'],
      linkedIn:
        'https://www.linkedin.com/in/luiz-henrique-de-figueiredo-b2458313/',
    },
    {
      name: 'Pedro Argento',
      position: ['DeFi Researcher'],
      linkedIn: 'https://www.linkedin.com/in/pedroargento/',
    },
    {
      name: 'Boris Povod',
      position: ['Co-founder of Wings', 'Co-founder of Cripti'],
      linkedIn: 'https://www.linkedin.com/in/boris-povod-361a1b79/',
    },
    {
      name: 'Stas Oskin',
      position: ['Senior Advisor', 'Core Dev & Bus Dev of Wings.ai'],
      linkedIn: 'https://www.linkedin.com/in/stasoskin/',
    },
  ];

  // const teamCategories =
  //   data.allContentfulPagePeople.edges[0].node.teamCategory;

  // const advisors = React.useMemo(
  //   () =>
  //     teamCategories.filter(
  //       (category) => category.categoryName === "Our advisors"
  //     )[0].teamMembers,
  //   [teamCategories]
  // );

  return (
    <>
      <Helmet>
        <title>People | Cartesi.io</title>
        <link rel='canonical' href='http://cartesio.io' />
      </Helmet>
      <Layout>
        <div className='bg-blue-50 pt-20 text-gray-900 lg:pt-24'>
          <Hero />
          <div className='section pt-0'>
            <ImageUnderHero image={heroImage} scrollTo='#meet' />
          </div>
        </div>

        <Meet team={team} />
        <Contributors />
        <ImageScreen image={fullscreenImage} />
        <Ambassadors />
        <Friends />
        <Advisors advisors={advisors} />
      </Layout>
    </>
  );
};

export const query = graphql`
  {
    # allContentfulPagePeople {
    #   edges {
    #     node {
    #       hero {
    #         heroImage {
    #           gatsbyImageData
    #           title
    #         }
    #       }
    #       teamCategory {
    #         categoryName
    #         description {
    #           description
    #         }
    #         id
    #         teamMembers {
    #           id
    #           name
    #           image {
    #             gatsbyImageData
    #           }
    #           position
    #         }
    #         subCategory {
    #           categoryName
    #           id
    #           teamMembers {
    #             id
    #             image {
    #               gatsbyImageData
    #             }
    #             name
    #             position
    #           }
    #         }
    #       }
    #     }
    #   }
    # }
    heroLarge: file(relativePath: { eq: "uploads/001.jpg" }) {
      id
      root
      relativePath
      childImageSharp {
        gatsbyImageData(formats: [AUTO, WEBP], width: 1280)
      }
    }
    heroSmall: file(relativePath: { eq: "uploads/001-mobile.jpg" }) {
      id
      root
      relativePath
      childImageSharp {
        gatsbyImageData(formats: [AUTO, WEBP], width: 768)
      }
    }
    fullscreenLarge: file(relativePath: { eq: "uploads/007.jpg" }) {
      id
      root
      relativePath
      childImageSharp {
        gatsbyImageData(formats: [AUTO, WEBP], width: 1280)
      }
    }
    fullscreenSmall: file(relativePath: { eq: "uploads/007-mobile.jpg" }) {
      id
      root
      relativePath
      childImageSharp {
        gatsbyImageData(formats: [AUTO, WEBP], width: 768)
      }
    }
  }
`;
export default injectIntl(PeoplePage);
