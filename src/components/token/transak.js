import React from "react";

const params = {
  apiKey: process.env.GATSBY_TRANSAK_API_KEY,
  defaultCryptoCurrency: "CTSI",
  cryptoCurrencyCode: "CTSI",
  themeColor: "000000",
  hostURL: "https://cartesi.io",
  hideMenu: true,
  exchangeScreenTitle: "Buy CTSI",
};

const Transak = () => {
  const getParams = () => {
    let queryString = "";
    Object.keys(params).forEach((key) => {
      queryString += !queryString
        ? `?${key}=${params[key]}`
        : `&${key}=${params[key]}`;
    });
    return queryString;
  };

  const getUrl = () => {
    return process.env.NODE_ENV === "production"
      ? "https://global.transak.com"
      : "https://staging-global.transak.com";
  };

  return (
    <div className="mx-auto my-8 max-w-[480px]">
      <iframe
        title="Buy CTSI"
        src={`${getUrl()}/${getParams()}`}
        frameBorder="no"
        allowtransparency="true"
        allowFullScreen
        className=" h-[680px] w-full  overflow-hidden rounded shadow-xl"
      ></iframe>
    </div>
  );
};

export default Transak;
