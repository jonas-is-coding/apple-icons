import * as React from "react";
const SvgBriefcasefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M10.552 3.567v1.09h7.62v-1.09c0-.75-.42-1.16-1.18-1.16h-5.25c-.77 0-1.19.41-1.19 1.16m3.82 8.42c-5.02 0-10.06-.95-14.37-2.94v-.34c0-2.64 1.43-4.05 4.09-4.05h3.8v-1.33c0-2.24 1.31-3.33 3.59-3.33h5.74c2.36 0 3.63 1.09 3.63 3.33v1.33h3.79c2.65 0 4.08 1.41 4.08 4.05v.34c-4.31 1.99-9.35 2.94-14.35 2.94m-10.28 12.38c-2.66 0-4.09-1.42-4.09-4.06v-8.52c4.1 1.6 7.46 2.28 10.91 2.53v.89c0 1 .57 1.54 1.62 1.54h3.66c1.06 0 1.62-.54 1.62-1.54v-.89c3.46-.25 6.81-.93 10.91-2.53v8.52c0 2.64-1.43 4.06-4.08 4.06Z" />
  </svg>
);
export default SvgBriefcasefillBold;
