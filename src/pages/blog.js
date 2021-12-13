import * as React from "react";
import { graphql, Link } from "gatsby";
import Seo from "../components/seo/seo";

export const query = graphql` {
  allSanityPost {
    edges {
      node {
        id
        title
        slug {
          _key
          _type
          current
        }
      }
    }
  }
}`;

const blogPage = ({ data }) => {
  return (
    <>
    <Seo title="blog Page" />

    {
      data.allSanityPost.edges.map(node => (
        <article key={node.node.slug.current}>
        <Link to={`/blog/${node.node.slug.current}`}>
        <h1>{node.node.title}</h1>
        </Link>
        </article>
      ))
    }
    </>
  )
}

export default blogPage;
