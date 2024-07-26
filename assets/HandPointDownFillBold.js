import * as React from "react";
const SvgHandpointdownfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M8.722-.004c-5.53 0-8.72 3.47-8.72 9.33v2.48c0 2.2 1.08 3.7 2.42 3.7.37 0 .58-.22.58-.58v-1.03c0-.41.19-.61.42-.61.26 0 .44.2.44.61v.67c0 1.37.9 2.31 2.11 2.31.6 0 .91-.29.91-.82v-1.41c0-.42.17-.62.41-.62.27 0 .44.2.44.62v1.3c0 1.49.86 2.3 2.1 2.3.57 0 .9-.29.9-.81v-2.79c0-.41.19-.62.41-.62.26 0 .45.2.45.62v9.09c0 1 .67 1.71 1.56 1.71.95 0 1.6-.7 1.6-1.71v-13.04c0-.27.14-.41.31-.41.15 0 .28.1.37.33l1.69 4.01c.28.68.76 1.14 1.52 1.14.99 0 1.67-.67 1.67-1.57 0-.31-.06-.59-.14-.81l-2.15-6.18c-1.74-5.04-5.05-7.21-9.3-7.21" />
  </svg>
);
export default SvgHandpointdownfillBold;
