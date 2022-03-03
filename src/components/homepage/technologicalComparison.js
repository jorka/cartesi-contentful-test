import { injectIntl } from "gatsby-plugin-intl";
import React from "react";

const TechnologicalComparison = () => {
  return (
    <div className="section pt-0">
      <div className="container max-w-4xl ">
        <div className="prose prose-invert prose-headings:font-serif prose-headings:text-3xl">
          <h2>Technological comparison</h2>
        </div>
      </div>
      <div className="container max-w-7xl pt-12 sm:pt-24">
        <div className="prose  prose-invert" data-anim-block>
          <table>
            <colgroup>
              <col span="1" style={{ width: "40%" }} />
            </colgroup>
            <thead>
              <tr>
                <th aria-label="Feature"></th>
                <th className="border-x border-yellow-50 text-center">
                  Ethereum
                </th>
                <th className="text-center">Cartesi Rollups</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Runtime environment</td>
                <td className="border-x border-yellow-50 text-center text-blue-300">
                  EVM
                </td>
                <td className="text-center text-yellow-500">Linux VM</td>
              </tr>
              <tr>
                <td>Languages</td>
                <td className="border-x border-yellow-50 text-center text-blue-300">
                  Solidity
                </td>
                <td className="text-center text-yellow-500">All</td>
              </tr>
              <tr>
                <td>Development tools</td>
                <td className="border-x border-yellow-50 text-center text-blue-300">
                  Nascent / Immature toolchain
                </td>
                <td className="text-center text-yellow-500">All</td>
              </tr>
              <tr>
                <td>Smart contact privacy</td>
                <td className="border-x border-yellow-50 text-center text-blue-300">
                  None (very expensive)
                </td>
                <td className="text-center text-yellow-500">
                  Possible (no extra cost)
                </td>
              </tr>
              <tr>
                <td>Computational Throughput</td>
                <td className="border-x border-yellow-50 text-center text-blue-300">
                  x
                </td>
                <td className="text-center text-yellow-500">
                  &gt; 10,000x (no fees)
                </td>
              </tr>
              <tr>
                <td>Transaction Throughput</td>
                <td className="border-x border-yellow-50 text-center text-blue-300">
                  x
                </td>
                <td className="text-center text-yellow-500">
                  x; &gt; 15x; &gt; 40x <sup>*</sup>
                </td>
              </tr>
              <tr>
                <td>Fee costs per tx</td>
                <td className="border-x border-yellow-50 text-center text-blue-300">
                  x
                </td>
                <td className="text-center text-yellow-500">
                  x; &gt; x/15; x/40; <sup>**</sup>
                </td>
              </tr>
              <tr>
                <td>Security</td>
                <td className="border-x border-yellow-50 text-center text-blue-300">
                  L1 consensus
                </td>
                <td className="text-center text-yellow-500">
                  Similar to L1 consensus
                </td>
              </tr>
            </tbody>
          </table>
          <p id="footnotes" className="mt-6 text-xs text-gray-400">
            <sup>*</sup> Respectively for each phase: Cartesi Rollups;
            CR+Aggregator V1; CR+Aggregator V2
            <br />
            <sup>**</sup> Transaction cost only. Computation is for free.
          </p>
        </div>
      </div>
    </div>
  );
};

export default injectIntl(TechnologicalComparison);
