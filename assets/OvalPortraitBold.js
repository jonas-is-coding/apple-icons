import * as React from "react";
const SvgOvalportraitBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M11.322 28.965c6.67 0 11.31-6 11.31-14.48 0-8.49-4.64-14.49-11.31-14.49s-11.32 6-11.32 14.49c0 8.48 4.65 14.48 11.32 14.48m0-3.02c-4.89 0-8.3-4.73-8.3-11.46s3.41-11.46 8.3-11.46c4.88 0 8.28 4.73 8.28 11.46s-3.4 11.46-8.28 11.46" />
  </svg>
);
export default SvgOvalportraitBold;
