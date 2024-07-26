import * as React from "react";
const SvgTrianglecirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.747c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.547.002 12.377s5.54 12.37 12.37 12.37m-6.09-10.38 4.31-7.49c.89-1.53 2.71-1.52 3.59-.01l4.31 7.5c.93 1.59.13 3.19-1.65 3.19h-8.91c-1.77 0-2.57-1.6-1.65-3.19m2.59.42c-.11.17-.04.32.16.32h6.72c.2 0 .26-.15.16-.32l-3.35-5.8c-.09-.17-.27-.17-.36 0Z" />
  </svg>
);
export default SvgTrianglecirclefillBold;
