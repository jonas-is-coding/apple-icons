import * as React from "react";
const SvgLockcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.754c6.83 0 12.38-5.55 12.38-12.38S19.202.004 12.372.004.002 5.544.002 12.374s5.54 12.38 12.37 12.38m-4.36-7.69v-4.63c0-.81.33-1.25.96-1.36v-1.27c0-2.27 1.38-3.79 3.4-3.79 2.04 0 3.41 1.52 3.41 3.79v1.28c.64.1.95.54.95 1.35v4.63c0 .97-.43 1.4-1.32 1.4h-6.06c-.9 0-1.34-.43-1.34-1.4m2.69-6.04h3.35v-1.32c0-1.22-.67-2.01-1.68-2.01s-1.67.8-1.67 2.01Z" />
  </svg>
);
export default SvgLockcirclefillBold;
