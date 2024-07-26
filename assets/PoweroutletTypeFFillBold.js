import * as React from "react";
const SvgPoweroutlettypeffillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 15.16c0 1.09.75 1.84 1.84 1.84h.72v.77c0 4.25 5.42 8.13 11.3 8.13 5.87 0 11.29-3.88 11.29-8.13V17h.73c1.08 0 1.83-.75 1.83-1.84v-4.43c0-1.09-.75-1.84-1.83-1.84h-.73v-.76c0-4.26-5.42-8.13-11.29-8.13-5.88 0-11.3 3.87-11.3 8.13v.76h-.72c-1.09 0-1.84.75-1.84 1.84Zm8.29.23c-1.34 0-2.44-1.09-2.44-2.44s1.1-2.45 2.44-2.45c1.35 0 2.44 1.1 2.44 2.45s-1.09 2.44-2.44 2.44m11.13 0c-1.34 0-2.44-1.09-2.44-2.44s1.1-2.45 2.44-2.45 2.44 1.1 2.44 2.45-1.1 2.44-2.44 2.44" />
  </svg>
);
export default SvgPoweroutlettypeffillBold;
