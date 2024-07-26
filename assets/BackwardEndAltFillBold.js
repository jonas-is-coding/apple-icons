import * as React from "react";
const SvgBackwardendaltfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.772 19.676c1.26 0 1.87-.63 1.87-1.89v-7.36c.19.58.69 1.02 1.46 1.46l12.76 7.44c.45.26.92.38 1.37.38 1.07 0 1.96-.73 1.96-2.18v-7.19c.16.62.66 1.09 1.47 1.55l12.76 7.44c.46.26.93.38 1.39.38 1.05 0 1.94-.73 1.94-2.18V2.176c0-1.45-.89-2.18-1.94-2.18-.46 0-.93.12-1.39.39l-12.76 7.43c-.81.47-1.31.93-1.47 1.56v-7.2c0-1.45-.89-2.18-1.96-2.18-.45 0-.92.12-1.37.39l-12.76 7.43c-.77.45-1.27.89-1.46 1.46v-7.37c0-1.24-.63-1.88-1.87-1.88h-2.9c-1.24 0-1.87.64-1.87 1.88v15.88c0 1.26.63 1.89 1.87 1.89Z" />
  </svg>
);
export default SvgBackwardendaltfillBold;
