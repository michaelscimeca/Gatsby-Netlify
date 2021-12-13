import React from "react";
import TransitionLink from 'gatsby-plugin-transition-link';
// Control In and out Here. You can customize by changing the function with your own
import { pageIn, pageOut } from "./pageTransition/pageTransitions";

function gsapLink(props) {
  return (
    <TransitionLink to={props.link}
      exit={{
        length: props.outLength,
        trigger: ({ node, e, exit, entry }) => pageOut( node, e, exit, entry),
      }}
    entry={{
      length: props.inLength,
      trigger: ({ node, e, exit, entry }) => pageIn( node, e, exit, entry)
    }} activeClassName="active">
      {props.content}
    </TransitionLink>
  );
}


export default gsapLink;
