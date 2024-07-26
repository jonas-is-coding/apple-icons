import * as React from "react";
const SvgSquaresplit1X2FillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.012 4.132v5.63h22.39v2.88H.012v-2.88h-.01v2.88h.01v5.63c0 2.67 1.45 4.13 4.11 4.13h14.18c2.66 0 4.12-1.46 4.12-4.13V4.132c0-2.67-1.46-4.13-4.12-4.13H4.122c-2.66 0-4.11 1.46-4.11 4.13" />
  </svg>
);
export default SvgSquaresplit1X2FillBold;
