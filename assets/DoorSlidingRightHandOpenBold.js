import * as React from "react";
const SvgDoorslidingrighthandopenBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M28.872 25.663c.84 0 1.52-.68 1.52-1.51V3.313c0-2.04-1.28-3.31-3.36-3.31H3.352c-2.07 0-3.35 1.27-3.35 3.31v20.84c0 .83.68 1.51 1.51 1.51s1.51-.68 1.51-1.51V3.693c0-.4.26-.66.66-.66h23.03c.39 0 .65.26.65.66v20.46c0 .83.68 1.51 1.51 1.51m-14.08-.66c.2 0 .35-.15.35-.35V4.813c0-.2-.15-.35-.35-.35h-9.98c-.19 0-.36.15-.36.35v19.84c0 .2.17.35.36.35Zm-2.33-8.77c-.39 0-.67-.3-.67-.67v-2.05c0-.38.28-.67.67-.67.38 0 .66.29.66.67v2.05c0 .37-.28.67-.66.67" />
  </svg>
);
export default SvgDoorslidingrighthandopenBold;
