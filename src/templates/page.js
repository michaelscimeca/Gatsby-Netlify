import React from "react"
import Seo from "../components/seo/seo.js";
import Hero from "../components/module/hero";
import DynamicContent from "../components/module/dynamicContent";
import Box from "../components/module/box";

const Page = ({ pageContext, transitionStatus, entry, exit }) => {
  const { page } = pageContext;
  console.log(page, ' page data')
  return (
  <div className="data-scroll-section">
    <div className="row primary-dynamic-padding">
      {JSON.stringify(page, null, 2)}
      <Seo
        title={page.title}
        description={page.description}
      />

    <h1>About</h1>
      </div>
    </div>
  )
};
export default Page;
