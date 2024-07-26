import * as React from "react";
const SvgTrayfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 21.236h19.96c2.69 0 4.14-1.46 4.14-4.12v-6.63c0-1.66-.19-2.39-.97-3.33l-3.94-4.94c-1.35-1.68-2.34-2.22-4.15-2.22H9.072c-1.82 0-2.81.54-4.17 2.24l-3.93 4.92c-.78.94-.97 1.67-.97 3.33v6.63c0 2.66 1.46 4.12 4.14 4.12m9.98-7.54c-1.77 0-3.04-1.47-3.04-3.07v-.16c0-.56-.32-1.1-1.03-1.1h-6.62c-.37 0-.44-.32-.26-.58l4.34-5.55c.43-.56.94-.82 1.64-.82h9.87c.69 0 1.2.26 1.64.82l4.21 5.41c.25.31.16.72-.32.72h-6.36c-.7 0-1.04.54-1.04 1.1v.16c0 1.6-1.26 3.07-3.03 3.07" />
  </svg>
);
export default SvgTrayfillBold;
