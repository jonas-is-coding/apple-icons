import * as React from "react";
const SvgLightbulbslashfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M11.64-.003c-2.59 0-4.88 1.06-6.38 2.77l12.49 12.48c.94-3.02 2.11-4.7 2.11-7.65 0-4.33-3.69-7.6-8.22-7.6m8.96 23.12c.39.4 1.03.39 1.39 0 .38-.38.39-1 0-1.39L1.68 1.397a.984.984 0 0 0-1.4 0c-.38.37-.37 1.04 0 1.39Zm-12.64-1.04h7.35c.49 0 .79-.2.96-.54.03-.17.06-.33.08-.47L3.49 8.237c.01.34.03.67.09 1 .5 3.29 2.49 5.22 3.04 11.59.07.78.56 1.25 1.34 1.25m-.17 3.05h7.7c.49 0 .88-.41.88-.87a.88.88 0 0 0-.88-.87h-7.7c-.49 0-.87.4-.87.87 0 .46.38.87.87.87m3.85 3.62c1.93 0 3.39-.92 3.52-2.31H8.09c.11 1.39 1.62 2.31 3.55 2.31" />
  </svg>
);
export default SvgLightbulbslashfillBold;
