import * as React from "react";
const SvgDoorslidinglefthandclosedBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M1.512 25.663c.83 0 1.51-.68 1.51-1.51V3.693c0-.4.26-.66.66-.66h23.03c.39 0 .65.26.65.66v20.46a1.515 1.515 0 0 0 3.03 0V3.313c0-2.04-1.28-3.31-3.36-3.31H3.352c-2.07 0-3.35 1.27-3.35 3.31v20.84c0 .83.68 1.51 1.51 1.51m3.3-.66h9.31c.2 0 .35-.15.35-.35V4.813c0-.2-.15-.35-.35-.35h-9.31c-.19 0-.36.15-.36.35v19.84c0 .2.17.35.36.35m11.45 0h9.31c.2 0 .36-.15.36-.35V4.813c0-.2-.16-.35-.36-.35h-9.31c-.2 0-.35.15-.35.35v19.84c0 .2.15.35.35.35m-9.11-8.77c-.39 0-.68-.3-.68-.67v-2.05c0-.38.29-.67.68-.67.37 0 .66.29.66.67v2.05c0 .37-.29.67-.66.67" />
  </svg>
);
export default SvgDoorslidinglefthandclosedBold;
