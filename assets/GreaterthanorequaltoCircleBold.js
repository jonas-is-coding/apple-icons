import * as React from "react";
const SvgGreaterthanorequaltocircleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-3.08a9.29 9.29 0 0 1-9.29-9.29c0-5.15 4.16-9.29 9.29-9.29 5.15 0 9.3 4.14 9.3 9.29 0 5.13-4.15 9.29-9.3 9.29m-2.7-7.22c.16 0 .34-.03.58-.15l5.64-2.57c.61-.25.87-.63.87-1.18 0-.54-.26-.96-.87-1.23l-5.64-2.57c-.24-.1-.42-.15-.58-.15-.67 0-1.09.61-1.09 1.14 0 .41.23.8.66.99l4.07 1.79v.03l-4.07 1.78c-.43.19-.66.58-.66 1 0 .51.42 1.12 1.09 1.12m7.16 2.57c0-.62-.5-1.11-1.16-1.11h-6.38c-.66 0-1.16.49-1.16 1.11 0 .6.5 1.09 1.16 1.09h6.38c.66 0 1.16-.49 1.16-1.09" />
  </svg>
);
export default SvgGreaterthanorequaltocircleBold;
