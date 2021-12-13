import * as React from "react";
import { graphql } from 'gatsby';
import Seo from "../components/seo/seo";
import Hero from "../components/module/hero";
import DynamicContent from "../components/module/dynamicContent";
import Vote from "../components/utility/vote.js";
import GsapLink from '../components/utility/gsapLink';
import { motion, useMotionValue, useTransform } from "framer-motion"

// Store setup
import { Provider } from 'react-redux';
import store from "../state/store.js";

const Home = ({ data, transitionStatus, entry, exit }) => {
  // Grab Home Page / Index Page
  const dataHome = data.allSanityPage.edges.filter((key) => {
    return key.node.slug.current === '/';
  });
  const x = useMotionValue(0)
  const input = [-20, 0, 20]
  const output = [0.5, 1, 0.5]
  const opacity = useTransform(x, input, output)

  const home = dataHome[0].node;
  const showcase = data.allSanityShowcase.edges;
  return (
    <div className="data-scroll-section">
      <div className="row primary-dynamic-padding">
        <Seo title="Home" />

      <motion.div className="object" drag="x" style={{ x, opacity }} />


        <Hero content={home} />
        <Provider store={store}>
          <Vote />
        </Provider>
        <section className="section" data-scroll>
          <div className="relative grid gap-x-32 grid-cols-4 md:grid-cols-8 lg:gap-x-6 lg:grid-cols-12 mx-auto  max-w-7xl gap-y-16 lg:gap-y-32">
            <div className="col-span-full md:col-span-12 2xl:col-span-6 text-left">
              <h2 className="text-ZhenZhuBaiPearl3 text-left block mb-24">Page Transitions</h2>
              <h5 className="text-left block mb-16">Examples</h5>
              <div className="mb-16">
                {showcase.map((item, i) => (
                  <div key={item.node.slug.current}>
                  <div className="relative grid gap-x-8 grid-cols-4 md:grid-cols-8 lg:gap-x-16 lg:grid-cols-12 mx-auto max-w-7xl">
                    <div className="col-span-full  lg:col-start-0">
                      <h4 className="text-ZhenZhuBaiPearl3 text-center inline-block mb-16 underline ">
                        <GsapLink link={`/showcase/${item.node.slug.current}/`} content={item.node.title} lengthOut="1" lengthIn="0" />
                      </h4>
                    </div>
                  </div>
                  </div>
                ))}
              </div>
              <div className="mb-32">
                <strong className="mb-16 block">gatsby-plugin-transition-link</strong>
                <p className="text-ZhenZhuBaiPearl3 mb-16">Since we are using gatsby-plugin-transition-link to do page transitions with Gsap as a animation lib. It's important to NOTE that the Layout components is added by the plugin and and pointed in the gatsby.config.js file.</p>
                <p className="text-ZhenZhuBaiPearl3 mb-16">TransitionLink components takes a few things I’m using Length and trigger. Trigger is setup to fire functions that are using GSAP to see the Gasp look at the pageTransitions.js file.</p>
                <p className="text-ZhenZhuBaiPearl3 mb-16">You can control In and out animation by make you own pageIn and PageOut functions.</p>
              </div>
              <div className="mb-16">
                <h3 className="mb-16 block">issues with Locomotive</h3>
                <p className="text-ZhenZhuBaiPearl3 mb-16">Because the page transitions switch between two divs on the same level locomotive doesn’t know when to reset the height on page change. Since the height of the pervious container/page is still there so, I use the length value to determine when it will leave the page and pass that to pageOut Function and set a setimeout + 100ms after that pervious container/page left and fire the window.scroll.update() for locomotive to rest.</p>
              </div>
            </div>
          </div>
        </section>

        <DynamicContent content={home.dynamicSection} />
      </div>
    </div>
  )
}

export const query = graphql` {
  allSanityPage {
     edges {
       node {
         id
         title
         slug {
           _key
           _type
           current
         }
         headline
         _rawContent
         _key
         content {
           _rawChildren
           list
           style
         }
         hero {
           asset {
             path
             gatsbyImageData
             children {
               ... on ImageSharp {
                 id
                 fixed {
                   base64
                   tracedSVG
                   aspectRatio
                   srcWebp
                   srcSetWebp
                   originalName
                 }
               }
             }
           }
         }
         dynamicSection {
           ... on SanityImageText {
             _rawContent
             _key
             content {
               _rawChildren
               list
               style
             }
             image {
               asset {
                 gatsbyImageData(aspectRatio: 1.5)
                 children {
                   ... on ImageSharp {
                     id
                     fixed {
                       base64
                       tracedSVG
                       aspectRatio
                       srcWebp
                       srcSetWebp
                       originalName
                     }
                   }
                 }
               }
             }
             layout
           }
           ... on SanityBoxRepeater {
             _key
             _type
             _rawRepeater
             repeater {
               _key
               _rawFeaturedImage
               _rawParagraph
               featuredImage {
                 _key
                 _type
                 _rawAsset
                 _rawHotspot
                 _rawCrop
                 asset {
                   gatsbyImageData
                 }
               }
               layout
               headline
               paragraph {
                 _key
                 _rawChildren
                 children {
                   _key
                   _type
                   marks
                   text
                 }
                 list
                 style
               }
             }
           }
         }
       }
     }
   }
   allSanityShowcase {
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
export default Home;
