import * as React from "react";
import Seo from "../../components/seo/seo";

export default function posts({ pageContext }) {
  const { page } = pageContext;
  return (
    <>
      <Seo title={page.title} description={page.description} />
      <div>
        {page.title}
      </div>
    </>
  )
};
