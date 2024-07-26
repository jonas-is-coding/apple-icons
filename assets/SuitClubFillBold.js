import * as React from "react";
const SvgSuitclubfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 13.595c0 3.09 2.22 5.34 5.26 5.34 1.89 0 3.59-.78 4.17-2.27h.2c-.05 1.87-2.12 3-2.87 3.66-1.11.93-.72 2.91.93 2.91h8.05c1.64 0 2.04-1.98.92-2.91-.75-.66-2.82-1.79-2.87-3.66h.2c.57 1.49 2.29 2.27 4.17 2.27 3.05 0 5.26-2.24 5.26-5.34 0-3.01-2.19-5.29-5.27-5.29-.89 0-1.8.24-2.58.71 1.17-1.18 1.6-2.55 1.6-3.82 0-2.83-2.32-5.2-5.47-5.2-3.12 0-5.44 2.37-5.44 5.2 0 1.27.42 2.64 1.59 3.82-.73-.46-1.7-.71-2.58-.71-3.08 0-5.27 2.28-5.27 5.29" />
  </svg>
);
export default SvgSuitclubfillBold;
