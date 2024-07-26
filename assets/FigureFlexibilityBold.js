import * as React from "react";
const SvgFigureflexibilityBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M7.52 5.515c1.51 0 2.76-1.24 2.76-2.76 0-1.51-1.25-2.76-2.76-2.76-1.52 0-2.76 1.25-2.76 2.76 0 1.52 1.24 2.76 2.76 2.76m17.93 16.79-7.96-4.29-4.59-3.19c-.3-.21-.57-.46-.81-.74.42-.33.59-.87.46-1.41l-.9-3.65a3.04 3.04 0 0 0-2.96-2.29H5.82c-.91 0-1.56.23-2.17.82l-3.26 3.28c-.44.44-.51 1.12-.2 1.66l2.27 3.98v7.03c0 .74.62 1.37 1.36 1.37.76 0 1.38-.63 1.38-1.37v-5.93l6.86.51 4.23 2.4 7.86 4.22c.8.43 1.57.02 1.86-.54.34-.68.09-1.51-.56-1.86M3.08 12.035l1.9-1.91 1.53 3.95-1.17.67h-.71Z" />
  </svg>
);
export default SvgFigureflexibilityBold;
