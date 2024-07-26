import * as React from "react";
const SvgTablecellsfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M15.432 5.622V.002h8.4c2.69 0 4.14 1.45 4.14 4.11v1.51Zm-2.89 0H.002v-1.51c0-2.66 1.46-4.11 4.14-4.11h8.4Zm2.89 2.74h12.54v5.68h-12.54Zm-2.89 5.68H.002v-5.68h12.54Zm2.89 8.36v-5.61h12.54v1.5c0 2.66-1.45 4.11-4.14 4.11Zm-15.43-5.61h12.54v5.61h-8.4c-2.68 0-4.14-1.45-4.14-4.11Z" />
  </svg>
);
export default SvgTablecellsfillBold;
