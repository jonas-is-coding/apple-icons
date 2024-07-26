import * as React from "react";
const SvgSoccerballinverseBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m-2.82-2.78a10 10 0 0 1-5.54-4.15l3.5-.05 1.72-2.2-1.08-3.36-3.2-1.3-2.59 1.45a10 10 0 0 1 2.23-6.23l.99 3.23 3.02 1.23 2.93-2.25v-3.2l-2.63-2.12c1.09-.4 2.25-.63 3.47-.63 1.21 0 2.37.22 3.45.63l-2.6 2.11v3.21l2.91 2.25 3.04-1.23.97-3.23a9.87 9.87 0 0 1 2.23 6.23l-2.58-1.45-3.21 1.3-1.09 3.37 1.72 2.21 3.51.05a10.07 10.07 0 0 1-5.53 4.13l.72-3.13-1.62-2.07h-3.87l-1.6 2.04Z" />
  </svg>
);
export default SvgSoccerballinverseBold;
