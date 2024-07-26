import * as React from "react";
const SvgLinesmeasurementhorizontalBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M14.852 22.748c1.19 0 1.78-.59 1.78-1.79V1.788c0-1.2-.59-1.79-1.78-1.79-1.2 0-1.79.59-1.79 1.79v19.17c0 1.2.59 1.79 1.79 1.79m-13.07-4.81c1.21 0 1.79-.58 1.79-1.78v-9.57c0-1.2-.58-1.78-1.79-1.78-1.2 0-1.78.58-1.78 1.78v9.57c0 1.2.58 1.78 1.78 1.78m26.13 0c1.2 0 1.78-.58 1.78-1.78v-9.57c0-1.2-.58-1.78-1.78-1.78s-1.79.58-1.79 1.78v9.57c0 1.2.59 1.78 1.79 1.78m-19.59-3.04c1.19 0 1.77-.58 1.77-1.78v-3.49c0-1.2-.58-1.78-1.77-1.78-1.2 0-1.78.58-1.78 1.78v3.49c0 1.2.58 1.78 1.78 1.78m13.05 0c1.2 0 1.78-.58 1.78-1.78v-3.49c0-1.2-.58-1.78-1.78-1.78-1.19 0-1.78.58-1.78 1.78v3.49c0 1.2.59 1.78 1.78 1.78" />
  </svg>
);
export default SvgLinesmeasurementhorizontalBold;
