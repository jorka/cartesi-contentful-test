import { injectIntl } from 'gatsby-plugin-intl';
import React from 'react';
import Video from '../video';

const LearnMore = () => {
  return (
    <div className=' bg-blue-200' id='learn-more'>
      <div className='section'>
        <div className='container max-w-4xl'>
          <div
            className='prose prose-headings:font-serif prose-headings:text-3xl'
            data-anim-block
          >
            <h2>An OS is needed to create this new world</h2>
            <p>
              Our digital revolution would not be possible without operating
              systems. Software that has been developed for decades on platforms
              like Linux underpins all of the applications and services we use
              every day.
            </p>
            <p>
              Now, a new Web of value, also known as Web 3, is being built on
              the Blockchain. Operating systems are unfortunately lost in the
              shift from the old web to the new value web. As a result, it's
              difficult for programmers and designers to work together to create
              a digital environment that is genuinely decentralized and
              inclusive.
            </p>
            <p>
              Blockchains must have a good operating system in order to reach
              their full potential and create a new world.
            </p>
          </div>
        </div>
      </div>
      <div className='section pt-0'>
        <div className='container max-w-7xl'>
          <Video id='9u1Uh2EmJvk' />
        </div>
      </div>
    </div>
  );
};

export default injectIntl(LearnMore);
