import * as React from "react";
const SvgMessagebadgefilledfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M24.102 8.03c2.19 0 4.02-1.82 4.02-4.01 0-2.2-1.83-4.02-4.02-4.02-2.2 0-4.02 1.82-4.02 4.02 0 2.19 1.82 4.01 4.02 4.01M4.812 26.1c1.47 0 4.77-1.43 7.09-3.06.27-.18.47-.23.71-.23.14.01.25.01.34.01 8.48-.01 15.17-4.35 15.17-11.38 0-1-.16-1.97-.47-2.88-.98.77-2.22 1.24-3.55 1.24-3.17 0-5.79-2.62-5.79-5.78 0-1.17.36-2.25.97-3.15-1.62-.53-3.38-.81-5.22-.81C6.262.06.002 5.13.002 11.44c0 3.8 2.2 7.29 6.19 9.47.28.15.34.33.19.59-.72 1.22-1.82 2.48-2.3 3.1-.63.77-.26 1.5.73 1.5" />
  </svg>
);
export default SvgMessagebadgefilledfillBold;
