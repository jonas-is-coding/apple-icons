import * as React from "react";
const SvgPipeanddropfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M2.462 13.346h2.18c1.62 0 2.46-.82 2.46-2.39v-.6h3.63l1.3-2.45c.62-1.17 1.67-1.81 2.93-1.81s2.29.64 2.92 1.83l1.33 2.43h3.59v.6c0 1.57.86 2.39 2.48 2.39h2.16c1.62 0 2.48-.82 2.48-2.39v-8.57c0-1.57-.86-2.39-2.48-2.39h-2.16c-1.62 0-2.48.82-2.48 2.39v.58h-15.7v-.58c0-1.57-.84-2.39-2.46-2.39h-2.18c-1.62 0-2.46.82-2.46 2.39v8.57c0 1.57.84 2.39 2.46 2.39m12.5 10.04c3.04 0 5.45-2.37 5.45-5.33 0-1.63-.81-3.2-1.45-4.42l-2.63-4.88c-.32-.6-.77-.9-1.37-.9-.61 0-1.05.31-1.37.9l-2.61 4.88c-.66 1.22-1.47 2.79-1.47 4.42 0 2.96 2.43 5.33 5.45 5.33" />
  </svg>
);
export default SvgPipeanddropfillBold;
