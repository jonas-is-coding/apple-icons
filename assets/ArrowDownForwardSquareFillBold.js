import * as React from "react";
const SvgArrowdownforwardsquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m10.96-14.82c.74 0 1.21.54 1.21 1.36v5.6c0 1.07-.61 1.62-1.63 1.62h-5.62c-.84 0-1.37-.47-1.37-1.22 0-.74.53-1.21 1.36-1.21h1.78l1.45.19-1.66-1.47-3.93-3.91c-.27-.28-.45-.66-.45-1.02 0-.83.63-1.38 1.39-1.38.41 0 .76.14 1.08.44l3.89 3.89 1.46 1.65-.17-1.52v-1.66c0-.83.46-1.36 1.21-1.36" />
  </svg>
);
export default SvgArrowdownforwardsquarefillBold;
