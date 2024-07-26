import * as React from "react";
const SvgDoorslidingrighthandclosedBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M28.872 25.663c.84 0 1.52-.68 1.52-1.51V3.313c0-2.04-1.28-3.31-3.36-3.31H3.352c-2.07 0-3.35 1.27-3.35 3.31v20.84c0 .83.68 1.51 1.51 1.51s1.51-.68 1.51-1.51V3.693c0-.4.26-.66.66-.66h23.03c.39 0 .65.26.65.66v20.46c0 .83.68 1.51 1.51 1.51m-3.3-.66c.2 0 .36-.15.36-.35V4.813c0-.2-.16-.35-.36-.35h-9.31c-.2 0-.35.15-.35.35v19.84c0 .2.15.35.35.35Zm-11.45 0c.2 0 .35-.15.35-.35V4.813c0-.2-.15-.35-.35-.35h-9.31c-.19 0-.36.15-.36.35v19.84c0 .2.17.35.36.35Zm9.12-8.77c-.38 0-.67-.3-.67-.67v-2.05c0-.38.29-.67.67-.67s.68.29.68.67v2.05c0 .37-.3.67-.68.67" />
  </svg>
);
export default SvgDoorslidingrighthandclosedBold;
