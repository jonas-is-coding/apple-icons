import * as React from "react";
const SvgBellcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.754c6.83 0 12.38-5.55 12.38-12.38S19.202.004 12.372.004.002 5.544.002 12.374s5.54 12.38 12.37 12.38m-5.13-8.25c-.74 0-1.2-.44-1.2-1.07 0-.74.58-1.31 1.18-1.85.48-.44.58-1.35.7-2.35.15-2.2.9-3.8 2.5-4.38.31-.87 1.02-1.46 1.96-1.46.95 0 1.66.59 1.96 1.46 1.6.58 2.35 2.18 2.51 4.38.13 1 .21 1.93.69 2.35.62.54 1.18 1.11 1.18 1.85 0 .63-.46 1.07-1.2 1.07Zm5.14 2.9c-1.2 0-2.08-.83-2.15-1.83h4.3c-.07 1-.95 1.83-2.15 1.83" />
  </svg>
);
export default SvgBellcirclefillBold;
