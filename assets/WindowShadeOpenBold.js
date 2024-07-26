import * as React from "react";
const SvgWindowshadeopenBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 22.363c0 2.04 1.28 3.3 3.35 3.3h15.3c2.08 0 3.36-1.26 3.36-3.3V3.313c0-2.04-1.28-3.31-3.36-3.31h-15.3c-2.07 0-3.35 1.27-3.35 3.31Zm3.02-.39V3.693c0-.4.26-.66.66-.66h14.65c.39 0 .64.26.64.66v18.28c0 .41-.25.67-.64.67H3.682c-.4 0-.66-.26-.66-.67m1.79-12.91h12.38c.2 0 .35-.16.35-.36v-3.89c0-.2-.15-.35-.35-.35H4.812c-.19 0-.36.15-.36.35v3.89c0 .2.17.36.36.36m4.43-1.63c-.38 0-.68-.3-.68-.67 0-.39.3-.67.68-.67h3.52c.39 0 .68.28.68.67 0 .37-.29.67-.68.67Z" />
  </svg>
);
export default SvgWindowshadeopenBold;
