import * as React from "react";
const SvgSignpostrightcircleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-3.08a9.29 9.29 0 0 1-9.29-9.29c0-5.15 4.16-9.29 9.29-9.29 5.15 0 9.3 4.14 9.3 9.29 0 5.13-4.15 9.29-9.3 9.29m-3.81-7.91h3.04v3.21h-1.37c-.42 0-.78.34-.78.76 0 .41.36.75.78.75h4.28c.42 0 .75-.34.75-.75 0-.42-.33-.76-.75-.76h-1.4v-3.21h2.51c.49 0 .77-.15 1.11-.48l1.42-1.36c.67-.64.68-1.31-.01-1.96l-1.41-1.35c-.34-.33-.62-.47-1.11-.47h-2.51v-1.12a.75.75 0 0 0-.74-.76c-.43 0-.77.34-.77.76v1.12h-3.04c-.84 0-1.33.48-1.33 1.31v2.99c0 .83.49 1.32 1.33 1.32" />
  </svg>
);
export default SvgSignpostrightcircleBold;
