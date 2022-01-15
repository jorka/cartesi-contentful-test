import { Link } from "gatsby";
import * as React from "react";

const Footer = () => {
  return (
    <footer className="py-8 bg-gray-900 text-white">
      <div className="container">
        <div className="grid">
          <div>
            <ul>
              <li>
                <Link to="#">About</Link>
              </li>
              <li>
                <Link to="#">CTSI Coins</Link>
              </li>
              <li>
                <Link to="#">Labs</Link>
              </li>
              <li>
                <Link to="#">Cartesians</Link>
              </li>

              <li>
                <Link to="#">Hello world</Link>
              </li>
              <li>
                <Link to="#">Hello new world</Link>
              </li>
              <li>
                <Link to="#">Hello new economy</Link>
              </li>

              <li>
                <Link to="#">Our whitepaper</Link>
              </li>
              <li>
                <Link to="#">Transit to blockchain</Link>
              </li>
            </ul>
          </div>
        </div>
        <p className="text-sm">
          All rights reserved © Cartesi Foundation Ltd.
          <br />
          The Cartesi Project is commissioned by the Cartesi Foundation.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
