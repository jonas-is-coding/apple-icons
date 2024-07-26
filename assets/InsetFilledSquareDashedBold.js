import * as React from "react";
const SvgInsetfilledsquaredashedBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 6.312h3.02v-1.82c0-1 .51-1.47 1.44-1.47h1.82V.002h-2.14c-2.68 0-4.14 1.45-4.14 4.11Zm8.19-3.29h6.02V.002h-6.02Zm11.19 3.29h3.02v-2.2c0-2.66-1.46-4.11-4.13-4.11h-2.15v3.02h1.82c.94 0 1.44.47 1.44 1.47Zm-13.67 11.15h11c.51 0 .77-.27.77-.8V5.702c0-.52-.26-.79-.77-.79h-11c-.52 0-.78.27-.78.79v10.96c0 .53.26.8.78.8m13.67-3.26h3.02v-5.99h-3.02Zm-19.38 0h3.02v-5.99H.002Zm16.12 8.2h2.15c2.67 0 4.13-1.45 4.13-4.11v-2.19h-3.02v1.83c0 .99-.5 1.45-1.44 1.45h-1.82Zm-11.98 0h2.14v-3.02h-1.82c-.93 0-1.44-.46-1.44-1.45v-1.83H.002v2.19c0 2.66 1.46 4.11 4.14 4.11m4.05 0h6.02v-3.02h-6.02Z" />
  </svg>
);
export default SvgInsetfilledsquaredashedBold;
