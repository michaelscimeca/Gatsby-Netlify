import React from 'react';
import { getImage, GatsbyImage } from "gatsby-plugin-image";
import BlockText from "../utility/blockText";

const DynamicContent = ({content}) => {
  return (
    <>
      {content.map((item, i) => (
        <section key={item._key} className="section" data-scroll>

          {item.layout === "left" &&
            <div className="rounded-lg box highlight p-16 lg:p-32 relative grid gap-x-4 grid-cols-4 md:grid-cols-8 lg:gap-x-6 lg:grid-cols-12 mx-auto max-w-8xl">
              <div className="col-span-full lg:col-span-6">
                <GatsbyImage
                  objectFit="contain"
                  image={getImage(item.image.asset.gatsbyImageData)}
                  alt="code-image" />
              </div>
              <div className="col-span-full lg:col-span-5 lg:col-start-8">
                <BlockText content={item._rawContent} />
              </div>
            </div>
          }

          {item.layout === "right" &&
            <div className="rounded-lg box highlight p-16 lg:p-32 relative grid gap-x-4 grid-cols-4 md:grid-cols-8 lg:gap-x-6 lg:grid-cols-12 mx-auto max-w-8xl">
              <div className="col-span-full lg:col-span-6">
                <BlockText content={item._rawContent} />
              </div>
              <div className="col-span-full lg:col-span-5 lg:col-start-8">
                <GatsbyImage
                  image={getImage(item.image.asset.gatsbyImageData)}
                  objectFit="contain"
                  alt="code-image" />
              </div>
            </div>
          }

          {item._type === "boxRepeater" &&
            <div className="relative mx-auto max-w-8xl">
              <div className="relative grid gap-x-32 grid-cols-4 md:grid-cols-8 lg:gap-x-6 lg:grid-cols-12 mx-auto max-w-7xl gap-y-16 lg:gap-y-32 mb-24 lg:mb-64">
                {item.repeater.map((item, i) =>
                  <div key={item._key} className="col-span-full lg:col-span-6">
                    {item.layout === "highlight" &&
                      <>
                      <div className="rounded-lg box highlight relative flex flex-col items-start px-32 py-32 w-full h-full rounded-lg lg:px-32">
                        <div className="flex flex-none items-end mb-4 text-xl font-medium">
                          {content.headline}
                        </div>
                        <GatsbyImage
                          objectFit="contain"
                          image={getImage(item.featuredImage.asset.gatsbyImageData)}
                          alt="code-image" />
                        <BlockText content={item._rawParagraph} />
                        <p className="flex-auto max-w-sm text-xl">{content.paragraph}</p>
                      </div>
                      </>
                  }
                  {item.layout === "standard" &&
                    <div className="rounded-lg box standard relative flex flex-col items-start px-32 py-32 w-full h-full rounded-lg lg:px-32">
                      <div className="flex flex-none items-end mb-4 text-xl font-medium">
                        {content.headline}
                      </div>
                      <BlockText content={item._rawParagraph} />
                    </div>
                  }
                  {item.layout === "featured" &&
                    <div className="rounded-lg box featured relative flex flex-col items-start px-32 py-32 w-full h-full rounded-lg lg:px-32">
                      <div className="flex flex-none items-end mb-4 text-xl font-medium">
                        {content.headline}
                      </div>
                      <GatsbyImage
                        objectFit="contain"
                        image={getImage(item.featuredImage.asset.gatsbyImageData)}
                        alt="code-image" />
                      <BlockText content={item._rawParagraph} />
                    </div>
                  }
                </div>
              )}
            </div>
          </div>
        }
        </section>
      ))}
    </>
);
}

export default DynamicContent;
