import * as React from "react";
const SvgPoweroutlettypemBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.402h14.94c2.67 0 4.13-1.45 4.13-4.11V4.112c0-2.66-1.46-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.18c0 2.66 1.46 4.11 4.14 4.11m.32-3.02c-.93 0-1.44-.46-1.44-1.45V4.492c0-1 .51-1.47 1.44-1.47h14.29c.94 0 1.44.47 1.44 1.47v13.44c0 .99-.5 1.45-1.44 1.45Zm7.14-9.89c1.02 0 1.85-.83 1.85-1.85s-.83-1.85-1.85-1.85-1.84.83-1.84 1.85.82 1.85 1.84 1.85m-3.73 7.09c1.02 0 1.85-.82 1.85-1.85a1.85 1.85 0 0 0-3.7 0c0 1.03.83 1.85 1.85 1.85m7.47 0c1.02 0 1.84-.82 1.84-1.85 0-1.01-.82-1.84-1.84-1.84s-1.85.83-1.85 1.84c0 1.03.83 1.85 1.85 1.85" />
  </svg>
);
export default SvgPoweroutlettypemBold;
