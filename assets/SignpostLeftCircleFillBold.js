import * as React from "react";
const SvgSignpostleftcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.754c6.83 0 12.38-5.55 12.38-12.38S19.202.004 12.372.004.002 5.544.002 12.374s5.54 12.38 12.37 12.38m4.05-10.91h-3.18v3.36h1.44c.45 0 .81.36.81.81 0 .44-.36.81-.81.81h-4.51c-.43 0-.8-.37-.8-.81 0-.45.37-.81.8-.81h1.45v-3.36h-2.61c-.54 0-.83-.17-1.18-.51l-1.49-1.42c-.71-.69-.72-1.39.01-2.08l1.48-1.43c.35-.34.64-.49 1.18-.49h2.61v-1.18c0-.44.37-.8.8-.8.46 0 .82.36.82.8v1.18h3.18c.89 0 1.41.5 1.41 1.39v3.13c0 .89-.52 1.41-1.41 1.41" />
  </svg>
);
export default SvgSignpostleftcirclefillBold;
