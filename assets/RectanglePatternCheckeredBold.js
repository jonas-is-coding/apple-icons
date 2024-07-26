import * as React from "react";
const SvgRectanglepatterncheckeredBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.402h19.69c2.69 0 4.14-1.45 4.14-4.11V4.112c0-2.66-1.45-4.11-4.14-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.18c0 2.66 1.46 4.11 4.14 4.11m-1.12-11.2h4.37v-4.09h-4.37v-2.64c0-.99.51-1.45 1.44-1.45h2.93v4.09h4.41v-4.09h4.36v4.09h4.4v-4.09h2.95c.93 0 1.44.46 1.44 1.45v2.64h-4.39v4.09h4.39v4.08h-4.39v4.1H7.392v-4.1h-4.37Zm8.78 0h4.36v-4.09h-4.36Zm-4.41 4.08h4.41v-4.08h-4.41Zm8.77 0h4.4v-4.08h-4.4Zm-4.36 4.1h4.36v-4.1h-4.36Z" />
  </svg>
);
export default SvgRectanglepatterncheckeredBold;
