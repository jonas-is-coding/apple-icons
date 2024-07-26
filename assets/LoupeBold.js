import * as React from "react";
const SvgLoupeBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.417 15.14c-1.85 4.9 2.55 8.29 11.3 8.29 8.73 0 13.11-3.46 11.28-8.29l-2.81-7.52V3.9c0-2.25-3.43-3.9-8.47-3.9-5.03 0-8.46 1.65-8.46 3.9v3.68ZM6.227 3.9c0-.63 2.19-1.29 5.49-1.29 3.29 0 5.48.66 5.48 1.29s-2.19 1.29-5.48 1.29c-3.3 0-5.49-.66-5.49-1.29m-2.94 12.2 2.08-5.41c1.38.84 3.58 1.37 6.35 1.37 2.73 0 4.95-.53 6.35-1.37l2.07 5.41c.92 2.44-2.29 4.3-8.42 4.3-6.14 0-9.38-1.79-8.43-4.3" />
  </svg>
);
export default SvgLoupeBold;
