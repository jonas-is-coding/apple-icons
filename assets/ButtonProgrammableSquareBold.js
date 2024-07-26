import * as React from "react";
const SvgButtonprogrammablesquareBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m.32-3.02c-.93 0-1.44-.46-1.44-1.45V4.484c0-.99.51-1.46 1.44-1.46h13.48c.94 0 1.44.47 1.44 1.46v13.45c0 .99-.5 1.45-1.44 1.45Zm6.74-1.83a6.336 6.336 0 1 0 0-12.67c-3.5 0-6.34 2.84-6.34 6.33 0 3.5 2.84 6.34 6.34 6.34m0-1.86c-2.47 0-4.46-2.01-4.46-4.48 0-2.46 1.99-4.46 4.46-4.46s4.47 2 4.47 4.46c0 2.47-2 4.48-4.47 4.48m0-1.29c1.76 0 3.19-1.43 3.19-3.19s-1.43-3.19-3.19-3.19-3.19 1.43-3.19 3.19 1.43 3.19 3.19 3.19" />
  </svg>
);
export default SvgButtonprogrammablesquareBold;
