import * as React from "react";
const SvgCirclegridcrossfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M13.762 10.39c2.84 0 5.19-2.35 5.19-5.2 0-2.83-2.35-5.19-5.19-5.19-2.88 0-5.22 2.36-5.22 5.19 0 2.85 2.34 5.2 5.22 5.2m-8.55 8.84c2.84 0 5.19-2.36 5.19-5.2s-2.35-5.18-5.19-5.18c-2.88 0-5.21 2.34-5.21 5.18s2.33 5.2 5.21 5.2m17.11 0c2.85 0 5.19-2.36 5.19-5.2s-2.34-5.18-5.19-5.18c-2.87 0-5.21 2.34-5.21 5.18s2.34 5.2 5.21 5.2m-8.56 8.84c2.84 0 5.19-2.36 5.19-5.21 0-2.83-2.35-5.18-5.19-5.18-2.88 0-5.22 2.35-5.22 5.18 0 2.85 2.34 5.21 5.22 5.21" />
  </svg>
);
export default SvgCirclegridcrossfillBold;
