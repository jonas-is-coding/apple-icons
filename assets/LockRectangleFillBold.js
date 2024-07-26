import * as React from "react";
const SvgLockrectanglefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.402h19.69c2.69 0 4.14-1.45 4.14-4.11V4.112c0-2.66-1.45-4.11-4.14-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.18c0 2.66 1.46 4.11 4.14 4.11m5.49-6.51v-4.63c0-.81.33-1.25.96-1.36v-1.27c0-2.27 1.37-3.79 3.4-3.79 2.04 0 3.41 1.52 3.41 3.79v1.28c.63.1.95.54.95 1.35v4.63c0 .97-.43 1.4-1.32 1.4h-6.06c-.91 0-1.34-.43-1.34-1.4m2.68-6.04h3.36v-1.32c0-1.22-.67-2.01-1.68-2.01-1.02 0-1.68.8-1.68 2.01Z" />
  </svg>
);
export default SvgLockrectanglefillBold;
