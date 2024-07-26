import * as React from "react";
const SvgShadowBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M2.152 7.182h4.67v-4.09c0-1.11-.56-1.72-1.6-2L1.112.002c.52.2 1.04.68 1.04 1.71Zm9.24 10.56 4.22 1.14c1.56.42 2.59-.21 2.59-1.88V3.092c0-1.11-.56-1.73-1.6-2.01l-4.1-1.08c.52.2 1.05.68 1.05 1.71v14.19c0 1.4-.93 1.96-2.16 1.84m-11.39 0 4.22 1.14c1.57.42 2.6-.21 2.6-1.88v-3.17h3.09v-3.67h-7.76v5.74c0 1.4-.92 1.96-2.15 1.84" />
  </svg>
);
export default SvgShadowBold;
