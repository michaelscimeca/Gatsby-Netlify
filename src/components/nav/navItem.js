import * as React from "react";
import TransitionLink from 'gatsby-plugin-transition-link';
import { pageIn, pageOut } from "../utility/pageTransition/pageTransitions";

const NavItem = (props) => {
  return (
    <>
    <li className="nav-item">
      <TransitionLink to={props.link} exit={{
        length: props.outLength,
        trigger: ({ node, e, exit, entry }) => pageOut( node, e, exit, entry),
      }} entry={{
        length: props.inLength,
        trigger: ({ node, e, exit, entry }) => pageIn( node, e, exit, entry)
      }} activeClassName="active">
        {props.content}
      </TransitionLink>
    </li>
    </>
  )
}

export default NavItem;
