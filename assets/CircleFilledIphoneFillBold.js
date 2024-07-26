import * as React from "react";
const SvgCirclefillediphonefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 23.541c0 2.13 1.48 3.55 3.69 3.55h10.15c2.13 0 3.55-1.42 3.55-3.55V3.561c0-2.13-1.42-3.56-3.55-3.56H3.692c-2.21 0-3.69 1.43-3.69 3.56Zm8.69-4.99c-2.75 0-5-2.25-5-5 0-2.76 2.25-5.01 5-5.01 2.76 0 5.01 2.25 5.01 5.01 0 2.75-2.25 5-5.01 5" />
  </svg>
);
export default SvgCirclefillediphonefillBold;
