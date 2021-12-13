import React from 'react';
import { GatsbyImage } from "gatsby-plugin-image";
import BlockText from "../utility/blockText";

const Hero = ({content}) => {
  return (
    <>
    <div className="relative grid gap-x-4 grid-cols-4 md:grid-cols-8 lg:gap-x-8 lg:my-72 lg:grid-cols-12 mx-auto max-w-8xl">
        <div className="col-span-full mb-12 lg:mb-0 lg:col-start-6 lg:col-span-7 lg:px-0 lg:-mt-24 lg:-mr-5vw flex items-center justify-end lg:min-h-[40rem]">
          <GatsbyImage
           image={content.hero.asset.gatsbyImageData}
            className="shadow-md border-ZhenZhuBaiPearl3 border-solid border-4 rounded"
            objectFit="contain"
            imgClassName="img"
            alt="hero-image" />
        </div>
        <div className="col-span-full lg:flex lg:flex-col lg:col-start-1 lg:row-start-1 lg:h-full lg:col-span-5 justify-center">
            <h1>{content.headline}</h1>
            <BlockText content={content._rawContent} />
        </div>
      </div>
    </>
  );
}

export default Hero;
