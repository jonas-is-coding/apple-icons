import * as React from "react";
const SvgForwardframeBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M1.78 19.706c1.03 0 1.79-.73 1.79-1.73V1.726c0-.99-.76-1.73-1.79-1.73C.76-.004 0 .736 0 1.726v16.25c0 1 .76 1.73 1.78 1.73m5.07-2.18c0 1.45.91 2.18 1.96 2.18.45 0 .92-.12 1.37-.38l12.78-7.44c.98-.58 1.52-1.15 1.52-2.03 0-.89-.54-1.47-1.52-2.04L10.18.386a2.65 2.65 0 0 0-1.37-.39c-1.05 0-1.96.73-1.96 2.18Zm3.03-1.91V4.076c0-.15.1-.26.24-.26.05 0 .1.02.15.05l9.94 5.78c.1.04.14.13.14.21 0 .07-.04.15-.14.21l-9.94 5.78a.4.4 0 0 1-.15.04c-.14 0-.24-.1-.24-.27" />
  </svg>
);
export default SvgForwardframeBold;
