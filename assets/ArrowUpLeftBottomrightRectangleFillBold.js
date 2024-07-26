import * as React from "react";
const SvgArrowupleftbottomrightrectanglefillBold = ({
  title,
  titleId,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.402h19.69c2.69 0 4.14-1.45 4.14-4.11V4.112c0-2.66-1.45-4.11-4.14-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.18c0 2.66 1.46 4.11 4.14 4.11m11.76-5.43c-.66 0-1.07-.5-1.07-1.21v-5.04c0-.94.53-1.42 1.42-1.42h5.06c.74 0 1.22.41 1.22 1.07 0 .67-.48 1.09-1.2 1.09h-1.59l-1.35-.19 1.54 1.38 3.2 3.18c.24.26.39.59.39.89 0 .74-.54 1.22-1.23 1.22-.35 0-.66-.12-.94-.4l-3.15-3.15-1.37-1.54.15 1.43v1.48c0 .73-.41 1.21-1.08 1.21" />
  </svg>
);
export default SvgArrowupleftbottomrightrectanglefillBold;
