import * as React from "react";
const SvgPowersleepBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M6.162 5.152c0-1.61.34-3.13.9-4.25.23-.65-.39-1.21-1.16-.71-3.41 1.99-5.9 5.94-5.9 10.48 0 6.83 5.54 12.39 12.37 12.39 3.92 0 7.47-1.86 9.72-4.75.54-.7.14-1.32-.68-1.16-.93.25-1.88.37-2.87.37-6.79 0-12.38-5.57-12.38-12.37" />
  </svg>
);
export default SvgPowersleepBold;
