import * as React from "react";
const SvgAirpodrightBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M5.652 10.455c3.02.03 5.61-2.36 5.56-5.24-.04-2.87-2.55-5.22-5.56-5.22-2.43 0-4.19 1.36-5.23 2.88-.28.43-.42.93-.42 1.46v1.79c0 .52.14 1.01.41 1.44a6.33 6.33 0 0 0 5.24 2.89m-3.03-3.11a.64.64 0 0 1-.64-.65v-2.92c0-.38.28-.66.64-.66.38 0 .66.28.66.66v2.92c0 .36-.28.65-.66.65m3.32 12.89h4.07v-9.78a7.1 7.1 0 0 1-4.07 1.43Zm1.51 4.22h1.04c.93 0 1.52-.53 1.52-1.4v-1.35h-4.07v1.35c0 .87.61 1.4 1.51 1.4" />
  </svg>
);
export default SvgAirpodrightBold;
