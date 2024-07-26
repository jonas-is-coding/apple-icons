import * as React from "react";
const SvgHomepodfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M10.062 3.084c3.19 0 5.58-.59 5.58-1.54 0-.97-2.38-1.54-5.58-1.54-3.15 0-5.53.57-5.53 1.54 0 .95 2.39 1.54 5.53 1.54m.03 22.36c6.96 0 10.09-2.48 10.09-8.02v-9.35c0-1.85-.39-3.53-1.19-4.68-.36-.53-1.05-.68-1.74-.29-1.49.94-4.24 1.61-7.16 1.61s-5.67-.67-7.16-1.61c-.69-.39-1.38-.24-1.75.29-.79 1.15-1.18 2.83-1.18 4.68v9.35c0 5.54 3.13 8.02 10.09 8.02" />
  </svg>
);
export default SvgHomepodfillBold;
