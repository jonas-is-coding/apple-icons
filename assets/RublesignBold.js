import * as React from "react";
const SvgRublesignBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M5.122 21.378c1.25 0 2.04-.81 2.04-2.1v-1.57h5.2c.44 0 .7-.26.7-.68 0-.43-.26-.7-.7-.7h-5.2v-3.05h3.84c4.12 0 7.24-2.53 7.24-6.62 0-3.97-2.81-6.66-7.03-6.66h-6.03c-1.29 0-2.1.85-2.1 2.18v9.67H.742c-.46 0-.74.28-.74.71 0 .45.28.72.74.72h2.34v3.05H.742c-.44 0-.72.27-.72.7 0 .42.28.68.72.68h2.34v1.57c0 1.29.79 2.1 2.04 2.1m2.04-11.19v-6.97h2.85c2.45 0 4.11 1.12 4.11 3.47 0 2.38-1.68 3.5-4.13 3.5Z" />
  </svg>
);
export default SvgRublesignBold;
