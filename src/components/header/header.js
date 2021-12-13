import * as React from "react";
import Nav from "../nav/nav";
import { StaticImage } from "gatsby-plugin-image";
import TransitionLink from 'gatsby-plugin-transition-link';
import { pageIn, pageOut } from "../utility/pageTransition/pageTransitions";

const Header = () => {
  return (
    <header id="top-bar" className="prose py-32">
      <div className="row primary-dynamic-padding">
        <div className="flex items-center justify-between">
          <div className="flex flex-auto items-center">
            <TransitionLink to="/"
              exit={{
                length: 2,
                trigger: ({ node, e, exit, entry }) => pageOut(node, exit, entry,e),
               }}
               entry={{
                 length: 1,
                 trigger: ({ node, e, exit, entry }) => pageIn(node, exit, entry, e)
               }}
              className="transition-link">
                <StaticImage
                src="../../assets/images/static/icon.png"
                alt="logo"
                layout="fixed"
                quality={95}
                width={35}
                height={35}
                />
            </TransitionLink>
            <div className="py-8 pl-16">
              <div className="text-nightblue font-bold">Tailwind Redux, Sanity, Transitions</div>
            </div>
          </div>
          <Nav/>
        </div>
      </div>
    </header>
  )
}

export default Header;
