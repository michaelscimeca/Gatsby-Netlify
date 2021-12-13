import * as React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import Facebook from '../seo/facebook';
import Twitter from '../seo/twitter';
import { useStaticQuery, graphql } from "gatsby";

const Seo = ({ title, description, lang, meta }) => {
  const { site } = useStaticQuery(
    graphql`
    query {
      site {
        siteMetadata {
          title
          description
          canonical
          siteUrl
          siteName
          type
          defaultImage
          ogLanguage
          twitter
        }
      }
    }
    `);

  const seo = {
    title: title,
    description: description || site.siteMetadata.description,
    image: site.siteMetadata.defaultImage,
    url: site.siteMetadata.siteUrl,
    canonical: site.siteMetadata.canonical,
    type: site.siteMetadata.type,
    siteName: site.siteMetadata.siteName,
    twitter: site.siteMetadata.twitter,
    ogLanguage: site.siteMetadata.ogLanguage,
  }

  return (
    <>
    <Helmet
      htmlAttributes={{lang}}
      title={title}
    >
      <meta name="image" content={seo.image} />
      <meta name="description" content={seo.description} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={seo.canonical} />
    </Helmet>

    <Facebook
     name={seo.siteName}
     desc={seo.description}
     image={seo.image}
     title={seo.title}
     type={seo.type}
     locale={seo.ogLanguage}
     url={seo.url}
    />

    <Twitter
      title={seo.title}
      image={seo.image}
      desc={seo.description}
      username={seo.twitter} />
    </>
  )
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default Seo
