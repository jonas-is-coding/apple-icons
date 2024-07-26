import * as React from "react";
const SvgLightbulbledfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M16.432 7.597c0-4.33-3.69-7.6-8.23-7.6-4.52 0-8.2 3.26-8.2 7.6 0 .78.09 1.47.26 2.13h15.91c.15-.66.26-1.34.26-2.13m-13.24 13.23c.02.78.56 1.25 1.34 1.25h7.35c.79 0 1.33-.47 1.35-1.25.21-4.39 1.32-6.65 2.16-8.72H1.042c.82 2.07 1.93 4.33 2.15 8.72m1.17 4.3h7.7c.49 0 .88-.41.88-.87a.88.88 0 0 0-.88-.87h-7.7c-.49 0-.88.4-.88.87 0 .46.39.87.88.87m3.84 3.62c1.94 0 3.4-.92 3.53-2.31h-7.08c.12 1.39 1.63 2.31 3.55 2.31" />
  </svg>
);
export default SvgLightbulbledfillBold;
