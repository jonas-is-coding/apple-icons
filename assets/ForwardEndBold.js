import * as React from "react";
const SvgForwardendBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 17.526c0 1.45.89 2.18 1.96 2.18.44 0 .91-.12 1.37-.38l12.76-7.44c.76-.44 1.26-.88 1.45-1.46v7.55c0 1 .75 1.73 1.78 1.73s1.78-.73 1.78-1.73V1.726c0-.99-.75-1.73-1.78-1.73s-1.78.74-1.78 1.73v7.55c-.19-.57-.69-1.01-1.45-1.46L3.332.386c-.46-.27-.93-.39-1.37-.39-1.07 0-1.96.73-1.96 2.18Zm3.02-1.91V4.076c0-.15.11-.26.25-.26.04 0 .09.02.14.05l9.95 5.78c.09.04.13.13.13.21 0 .07-.04.15-.13.21l-9.95 5.78a.4.4 0 0 1-.14.04c-.14 0-.25-.1-.25-.27" />
  </svg>
);
export default SvgForwardendBold;
