import * as React from "react";
const SvgWebcamerafillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M5.712 25.135h8.84c.74 0 1.35-.6 1.35-1.33 0-.74-.61-1.34-1.35-1.34h-3.07v-2.27c4.96-.66 8.78-4.9 8.78-10.05 0-5.61-4.52-10.15-10.12-10.15-5.61 0-10.14 4.54-10.14 10.15 0 5.15 3.82 9.39 8.79 10.05v2.27h-3.08c-.74 0-1.34.6-1.34 1.34 0 .73.6 1.33 1.34 1.33m4.43-9.21c-3.23 0-5.78-2.55-5.78-5.79 0-3.22 2.55-5.78 5.78-5.78s5.76 2.56 5.76 5.78c0 3.24-2.53 5.79-5.76 5.79m0-3.43c1.31 0 2.33-1.05 2.33-2.36a2.31 2.31 0 0 0-2.33-2.34 2.32 2.32 0 0 0-2.35 2.34c0 1.31 1.03 2.36 2.35 2.36" />
  </svg>
);
export default SvgWebcamerafillBold;
