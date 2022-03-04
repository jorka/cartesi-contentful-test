import React from 'react';
import AltNavigation from '../altNavigation';
import ReadmoreLink from '../readmoreLink';
import ReadMoreIcon from '../../assets/images/icon-read-more.svg';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { injectIntl } from 'gatsby-plugin-intl';

const HelloNewEconomy = () => {
  return (
    <div className='section bg-yellow-500 text-gray-900' id='hello-new-economy'>
      <div className='container max-w-4xl'>
        <div
          className='prose prose-headings:font-serif prose-headings:text-3xl'
          data-anim-block
        >
          <h2>Hello new economy</h2>
          <p>
            Envision potential revenue streams with more and more economic
            segments awakening to the new economy blockchain can bring. From
            finance to fine art, and gaming to gardening, the numbers keep
            growing.
          </p>
          <p>
            The users earn tokens by creating, publishing, liking and sharing
            content. The more the users add value to the network, the more the
            networks can afford to pay. Even in gaming the players help the
            game’s growth through playing to earn.
          </p>
        </div>
        <AltNavigation className='mt-12 border-t border-blue-900 lg:mt-24'>
          <button onClick={() => scrollTo('#articles')}>
            <span className='group inline-flex items-center gap-4'>
              Learn more
              <ReadMoreIcon className='flex-shrink-0 fill-current transition-transform group-hover:translate-x-2' />
            </span>
          </button>

          <ReadmoreLink to='/en/token'>The economy of the OS</ReadmoreLink>
        </AltNavigation>
      </div>
    </div>
  );
};

export default injectIntl(HelloNewEconomy);
