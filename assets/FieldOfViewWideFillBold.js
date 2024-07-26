import * as React from "react";
const SvgFieldofviewwidefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m.91 9.496 10.54 10.5c1.72 1.71 3.7 1.73 5.48-.03l10.49-10.47c1.24-1.23 1.2-2.83-.01-4.08-3.21-3.37-8.24-5.42-13.24-5.42-5.01 0-10.01 2.08-13.26 5.42-1.19 1.25-1.24 2.85 0 4.08" />
  </svg>
);
export default SvgFieldofviewwidefillBold;
