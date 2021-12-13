import * as React from "react";
import Seo from "../../components/seo/seo";
import GsapLink from '../../components/utility/gsapLink';

const showCasePage = (data) => {
  const { pageContext } = data;
  console.log(pageContext, 'showcase')
  return (
    <>
    <Seo title="Showcase Page" />
    <div className="row primary-dynamic-padding">
      <div className="relative grid gap-x-8 grid-cols-4 md:grid-cols-8 lg:gap-x-16 lg:grid-cols-12 mx-auto max-w-7xl">
        <div className="col-span-full lg:col-span-8 lg:col-start-2">
          <GsapLink link='/' content="Go Back" lengthOut="1" lengthIn="0" />
        </div>
      </div>
    </div>
    </>
  )
}

export default showCasePage;
