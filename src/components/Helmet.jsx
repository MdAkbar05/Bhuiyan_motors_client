import React from "react";
import { Helmet } from "react-helmet";

const HelmetPage = ({ title, desc, link }) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="description" content={desc} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={desc} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={link} />
      <meta property="og:image" content={link} />
      <meta property="og:site_name" content="Bhuiya Motors" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={desc} />
      <meta name="twitter:image" content={link} />

      {/* Google Analytics */}

      <link rel="canonical" href={link} />
    </Helmet>
  );
};

export default HelmetPage;
