import * as React from "react";
const SvgHourglasstophalffilledBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M2.302 22.329h9.86c1.42 0 2.3-.85 2.3-2.31v-.2c0-3.01-3.11-6.06-4.45-7.41-.77-.76-.8-1.72 0-2.52 1.34-1.33 4.45-4.37 4.45-7.39v-.18c0-1.48-.88-2.32-2.3-2.32h-9.86c-1.42 0-2.3.84-2.3 2.32v.18c0 3.02 3.09 6.06 4.45 7.39.76.76.8 1.72 0 2.52-1.36 1.35-4.45 4.4-4.45 7.41v.2c0 1.46.88 2.31 2.3 2.31m1.13-2.24c-.57 0-.77-.68-.36-1.08l3.42-3.38c.47-.48 1-.48 1.47 0l3.43 3.38c.4.4.21 1.08-.38 1.08Z" />
  </svg>
);
export default SvgHourglasstophalffilledBold;
