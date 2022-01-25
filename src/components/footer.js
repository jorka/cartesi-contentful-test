import { Link } from "gatsby";
import * as React from "react";
import Logo from "./logo";

const Footer = () => {
  return (
    <footer className="py-8 lg:py-12 xl:py-16 bg-gray-900 text-white text-xs font-light">
      <div className="container">
        <div className="flex flex-col sm:flex-row gap-6 justify-between items-end">
          <div className="flex gap-12 lg:gap-24 justify-between">
            <div>
              <ul className="mb-6">
                <li>
                  <Link to="#" className="hover:text-gray-200">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-gray-200">
                    CTSI Coins
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-gray-200">
                    Labs
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-gray-200">
                    Cartesians
                  </Link>
                </li>
              </ul>
              <ul className="mb-6">
                <li>
                  <Link to="#" className="hover:text-gray-200">
                    Hello world
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-gray-200">
                    Hello new world
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-gray-200">
                    Hello new economy
                  </Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link to="#" className="hover:text-gray-200">
                    Our whitepaper
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-gray-200">
                    Transit to blockchain
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <ul className="mb-6">
                <li>
                  <Link to="#" className="hover:text-gray-200">
                    Docs
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-gray-200">
                    Faq
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-gray-200">
                    Community
                  </Link>
                </li>
              </ul>

              <ul className="mb-6">
                <li>
                  <Link to="#" className="hover:text-gray-200">
                    Discord
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-gray-200">
                    Github
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-gray-200">
                    Twitter
                  </Link>
                </li>

                <li>
                  <Link to="#" className="hover:text-gray-200">
                    Telegram
                  </Link>
                </li>
              </ul>
              <p>
                All rights reserved © Cartesi Foundation Ltd.
                <br />
                The Cartesi Project is commissioned by the Cartesi Foundation.
              </p>
            </div>
          </div>
          <div className="mb-6 sm:mb-0 flex justify-center">
            <Logo width="213" height="73" />
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
