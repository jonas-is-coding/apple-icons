import * as React from "react";
const SvgPluscircleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-3.08a9.29 9.29 0 0 1-9.29-9.29c0-5.15 4.16-9.29 9.29-9.29 5.15 0 9.3 4.14 9.3 9.29 0 5.13-4.15 9.29-9.3 9.29m-5.39-9.29c0 .75.54 1.29 1.29 1.29h2.8v2.81c0 .74.54 1.28 1.29 1.28s1.31-.54 1.31-1.28v-2.81h2.8c.74 0 1.28-.54 1.28-1.29 0-.76-.54-1.31-1.28-1.31h-2.8v-2.8c0-.75-.56-1.28-1.31-1.28s-1.29.53-1.29 1.28v2.8h-2.8c-.75 0-1.29.55-1.29 1.31" />
  </svg>
);
export default SvgPluscircleBold;
