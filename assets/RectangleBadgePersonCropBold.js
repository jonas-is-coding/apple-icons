import * as React from "react";
const SvgRectanglebadgepersoncropBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.886 22.402h15.61c2.69 0 4.14-1.45 4.14-4.11V4.112c0-2.66-1.45-4.11-4.14-4.11H8.806c-2.68 0-4.14 1.45-4.14 4.11v6.38a6.8 6.8 0 0 1 3.02 0v-6c0-1 .51-1.47 1.44-1.47h19.05c.93 0 1.44.47 1.44 1.47v13.44c0 .99-.51 1.45-1.44 1.45h-14.21a6.8 6.8 0 0 1-1.08 3.02m-6.71 2.03c3.36 0 6.16-2.81 6.16-6.17 0-3.38-2.77-6.17-6.16-6.17s-6.18 2.79-6.18 6.17c0 3.37 2.79 6.17 6.18 6.17m0-6.06c-1.02 0-1.8-.83-1.8-1.99 0-1.03.78-1.9 1.8-1.9 1.01 0 1.8.87 1.8 1.9 0 1.16-.79 1.99-1.8 1.99m0 4.28c-1.7 0-2.99-.93-3.29-1.69v-.06c.37-.72 1.67-1.52 3.29-1.52s2.92.8 3.28 1.52v.06c-.3.76-1.58 1.69-3.28 1.69" />
  </svg>
);
export default SvgRectanglebadgepersoncropBold;
