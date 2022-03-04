import AniLink from 'gatsby-plugin-transition-link/AniLink';
import React from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';
import { injectIntl } from 'gatsby-plugin-intl';

const Hero = () => {
  return (
    <div className='section flex flex-col justify-center py-12 xl:min-h-[80vh]'>
      <div className='container max-w-4xl'>
        <div
          className='prose prose-lg prose-invert text-center prose-headings:font-serif prose-headings:text-4xl prose-p:font-serif'
          data-anim-block
        >
          <h1>
            Hello world.
            <br /> There’s a new OS
          </h1>
          <p>
            We’ve taken 30 years of software development and given it a new
            home. To the makers and mavericks, the dreamers and the pioneers, we
            say welcome.
          </p>
        </div>
        <div className='mt-8 flex flex-col justify-center gap-4 text-center sm:flex-row sm:items-center lg:mt-16'>
          <AniLink
            cover
            direction='left'
            duration={0.8}
            to='/en/blockchain-os'
            className='btn-outline-inverted'
          >
            <span>Enter the new world</span>
          </AniLink>
          <button
            onClick={() => scrollTo('#hello-bockchain-os')}
            className='btn-outline-inverted'
          >
            <span>Enter the blockchain OS & start coding</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default injectIntl(Hero);
