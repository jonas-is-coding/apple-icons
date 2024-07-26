import * as React from "react";
const SvgSquareandarrowdownfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 25.873h13.57c2.68 0 4.13-1.45 4.13-4.11v-11.33c0-2.66-1.45-4.12-4.13-4.12h-5.43v-4.98c0-.71-.6-1.33-1.36-1.33-.75 0-1.35.62-1.35 1.33v4.98h2.71v6.51l-.12 1.72.55-.84 1.43-1.53c.23-.24.54-.38.88-.38.62 0 1.17.46 1.17 1.13 0 .34-.13.59-.36.82l-3.83 3.69c-.36.36-.72.47-1.08.47s-.71-.11-1.07-.47l-3.84-3.69c-.23-.23-.36-.48-.36-.82 0-.67.55-1.13 1.17-1.13.34 0 .65.14.89.38l1.43 1.53.55.84-.12-1.72v-6.51h-5.43c-2.68 0-4.14 1.46-4.14 4.12v11.33c0 2.66 1.46 4.11 4.14 4.11" />
  </svg>
);
export default SvgSquareandarrowdownfillBold;
