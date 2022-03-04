import { injectIntl } from 'gatsby-plugin-intl';
import React from 'react';
import Map from './map';

const Ambassadors = () => {
  return (
    <>
      <div className='section bg-yellow-50 text-gray-900' id='ambassadors'>
        <div className='container max-w-4xl'>
          <div
            className='prose prose-headings:font-serif prose-headings:text-3xl'
            data-anim-block
          >
            <h2>
              Ambassadors of
              <br /> The Blockchain OS
            </h2>
            <p>
              Our ambassadors hold the keys to the door; they’re spreading the
              word about a unique technology. Starting whole new communities in
              unchartered waters. Acting as agents for our work. And from
              mentoring to receiving rewards, participating and creating
              content, they’re helping to scale up the Cartesi ecosystem. These
              are the ambassadors, striving to develop a brighter future.
            </p>
          </div>
          {/*
          <AltNavigation className="mt-12 border-t border-blue-900 lg:mt-24">
            <ReadmoreLink to="#">Become an ambassador</ReadmoreLink>
          </AltNavigation>
          */}
        </div>
      </div>
      <Map />
    </>
  );
};

export default injectIntl(Ambassadors);
