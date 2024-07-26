import * as React from "react";
const SvgIcloudcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.754c6.83 0 12.38-5.55 12.38-12.38S19.202.004 12.372.004.002 5.544.002 12.374s5.54 12.38 12.37 12.38m-4.32-7.89c-1.74 0-3.05-1.17-3.05-3.04 0-1.44.79-2.53 1.95-3a2.47 2.47 0 0 1 2.13-2.07c.25-.05.53-.06.82-.04.8-1.05 2.11-1.71 3.53-1.71 2.41 0 4.29 1.82 4.45 4.11.04.18.05.37.04.58 1.03.33 1.85 1.25 1.85 2.51 0 1.49-1.14 2.66-2.6 2.66Z" />
  </svg>
);
export default SvgIcloudcirclefillBold;
