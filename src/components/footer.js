import { Link } from 'gatsby';
import { injectIntl } from 'gatsby-plugin-intl';
import * as React from 'react';
import Logo from './logo';

const Footer = () => {
  return (
    <footer className='bg-gray-900 py-8 text-xs font-light text-yellow-50 lg:py-12 xl:py-16'>
      <div className='container'>
        <div className='flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end'>
          <div className='flex justify-between gap-12 lg:gap-24'>
            <div>
              <ul className='mb-6'>
                <li>
                  <Link to='/en/blockchain-os' className='hover:text-gray-200'>
                    Blockchain OS
                  </Link>
                </li>
                <li>
                  <Link to='/en/token' className='hover:text-gray-200'>
                    CTSI Token
                  </Link>
                </li>
                <li>
                  <Link to='/en/labs' className='hover:text-gray-200'>
                    Labs
                  </Link>
                </li>
                <li>
                  <Link to='/en/about' className='hover:text-gray-200'>
                    About
                  </Link>
                </li>
                <li>
                  <Link to='/en/people' className='hover:text-gray-200'>
                    People
                  </Link>
                </li>
              </ul>

              <ul className='mb-6'>
                <li>
                  <a
                    href='/en/docs'
                    target='_blank'
                    rel='noreferrer'
                    className='hover:text-gray-200'
                  >
                    Docs
                  </a>
                </li>
              </ul>

              <ul>
                <li>
                  <a
                    href='/cartesi_whitepaper.pdf'
                    target='_blank'
                    rel='noreferrer'
                    className='hover:text-gray-200'
                  >
                    Our whitepaper
                  </a>
                </li>
                <li>
                  <a
                    href='/foundation_notice.pdf'
                    target='_blank'
                    rel='noreferrer'
                    className='hover:text-gray-200'
                  >
                    Foundation Notice
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <ul className='mb-6'>
                <li>
                  <a
                    href='https://discord.gg/Pt2NrnS'
                    target='_blank'
                    rel='noreferrer'
                    className='hover:text-gray-200'
                  >
                    Discord
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.github.com/cartesi'
                    target='_blank'
                    rel='noreferrer'
                    className='hover:text-gray-200'
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.twitter.com/cartesiproject'
                    target='_blank'
                    rel='noreferrer'
                    className='hover:text-gray-200'
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href='https://t.me/cartesiannouncements'
                    target='_blank'
                    rel='noreferrer'
                    className='hover:text-gray-200'
                  >
                    Telegram
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.medium.com/cartesi'
                    target='_blank'
                    rel='noreferrer'
                    className='hover:text-gray-200'
                  >
                    Medium
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.youtube.com/c/Cartesiproject/videos'
                    target='_blank'
                    rel='noreferrer'
                    className='hover:text-gray-200'
                  >
                    Youtube
                  </a>
                </li>
                <li>
                  <a
                    href='https://www.reddit.com/r/cartesi/'
                    target='_blank'
                    rel='noreferrer'
                    className='hover:text-gray-200'
                  >
                    Reddit
                  </a>
                </li>
              </ul>
              <p>
                All rights reserved © Cartesi Foundation Ltd.
                <br />
                The Cartesi Project is commissioned by the Cartesi Foundation.
              </p>
            </div>
          </div>
          <div className='mb-6 flex justify-center sm:mb-0'>
            <Logo width='213' height='73' />
          </div>
        </div>
      </div>
    </footer>
  );
};
export default injectIntl(Footer);
