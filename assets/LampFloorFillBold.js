import * as React from "react";
const SvgLampfloorfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M3.891 29.712h10.78c.63 0 1.07-.47 1.07-1.13 0-1.14-.92-1.92-2.28-1.92h-2.86v-10.23c2.2-.05 4.27-.2 6.03-.47 1.72-.25 2.31-1.55 1.71-3.4l-3.14-9.8c-.59-1.86-2.09-2.76-4.22-2.76h-3.4c-2.13 0-3.63.9-4.22 2.76l-3.13 9.8c-.61 1.85-.02 3.15 1.7 3.4 1.76.27 3.85.42 6.03.47v10.23h-2.86c-1.36 0-2.28.78-2.28 1.92 0 .66.44 1.13 1.07 1.13" />
  </svg>
);
export default SvgLampfloorfillBold;
