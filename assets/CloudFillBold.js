import * as React from "react";
const SvgCloudfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M6.242 19.616h15.59c4.21 0 7.46-3.2 7.46-7.31 0-4.17-3.26-7.35-7.67-7.35-1.62-3.17-4.52-4.96-8.23-4.96-4.76 0-8.69 3.5-9.28 8.29-2.51.81-4.11 2.93-4.11 5.51 0 3.4 2.55 5.82 6.24 5.82" />
  </svg>
);
export default SvgCloudfillBold;
