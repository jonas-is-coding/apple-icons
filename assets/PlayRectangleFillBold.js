import * as React from "react";
const SvgPlayrectanglefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.402h19.69c2.69 0 4.14-1.45 4.14-4.11V4.112c0-2.66-1.45-4.11-4.14-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.18c0 2.66 1.46 4.11 4.14 4.11m7.93-6.34c-.83.51-1.81.07-1.81-.89v-7.95c0-.95.99-1.37 1.81-.88l6.55 3.85c.76.46.77 1.55 0 2.02Z" />
  </svg>
);
export default SvgPlayrectanglefillBold;
