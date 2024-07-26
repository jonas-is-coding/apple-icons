import * as React from "react";
const SvgCreditcardBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 20.74h19.79c2.67 0 4.13-1.46 4.13-4.11V4.11c0-2.66-1.46-4.11-4.13-4.11H4.142C1.462 0 .002 1.45.002 4.11v12.52c0 2.66 1.46 4.11 4.14 4.11M3.022 4.48c0-1 .51-1.46 1.44-1.46h19.13c.94 0 1.45.46 1.45 1.46v.73H3.022Zm1.44 13.24c-.93 0-1.44-.47-1.44-1.47V8.1h22.02v8.15c0 1-.51 1.47-1.45 1.47Zm1.67-1.95h2.87c.69 0 1.15-.47 1.15-1.12v-2.17c0-.67-.46-1.12-1.15-1.12h-2.87c-.69 0-1.15.45-1.15 1.12v2.17c0 .65.46 1.12 1.15 1.12" />
  </svg>
);
export default SvgCreditcardBold;
