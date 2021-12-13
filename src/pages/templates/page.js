import React from "react"
import Seo from "../../components/seo/seo.js";
import Hero from "../../components/module/hero";
import DynamicContent from "../../components/module/dynamicContent";
import Box from "../../components/module/box";

const Page = ({ pageContext, transitionStatus, entry, exit }) => {
  const { page } = pageContext;

  return (
  <div className="data-scroll-section">
    <div className="row primary-dynamic-padding">

      <Seo
        title={page.title}
        description={page.description}
      />

      <Hero content={page} />

      <DynamicContent content={page.dynamicSection} />

      <div className="relative mx-auto max-w-8xl">

        <div className="relative grid gap-x-8 grid-cols-4 md:grid-cols-8 lg:gap-x-8 lg:grid-cols-12 mx-auto max-w-7xl">
          <div className="flex flex-col col-span-full space-y-10 lg:flex-row lg:items-end lg:justify-between lg:space-y-0 my-56">
            <div className="space-y-2 lg:space-y-0">
              <h2 className="leading-tight text-3xl md:text-6xl text-black dark:text-white">Some unique things about me.</h2>
            </div>
          </div>
          </div>
        </div>

        <div className="relative mx-auto max-w-8xl">
          <div className="relative grid gap-x-32 grid-cols-4 md:grid-cols-8 lg:gap-x-6 lg:grid-cols-12 mx-auto max-w-7xl gap-y-16 lg:gap-y-32 mb-24 lg:mb-64">
            <Box content={{
              headline: 'Headline',
              paragraph: "Paragraph"
            }} />
          </div>
        </div>

      </div>
    </div>
  )
};
export default Page;
