import * as React from "react";
const SvgCirclefilledpatterndiagonallinerectangleBold = ({
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
    <path d="M4.142 22.402h19.69c2.69 0 4.14-1.45 4.14-4.11V4.112c0-2.66-1.45-4.11-4.14-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.18c0 2.66 1.46 4.11 4.14 4.11m.32-3.02c-.93 0-1.44-.46-1.44-1.45V4.472c0-.99.51-1.45 1.44-1.45h19.05c.93 0 1.44.46 1.44 1.45v13.46c0 .99-.51 1.45-1.44 1.45Zm9.5-1.78c3.53 0 6.39-2.86 6.39-6.4 0-3.53-2.86-6.4-6.39-6.4s-6.39 2.87-6.39 6.4c0 3.54 2.86 6.4 6.39 6.4m-4.42-6.4a4.41 4.41 0 0 1 4.42-4.43c.12 0 .24.01.37.02l-4.78 4.79c-.01-.13-.01-.25-.01-.38m.64 2.32 6.1-6.09c.62.37 1.13.9 1.5 1.52l-6.07 6.07a4.3 4.3 0 0 1-1.53-1.5m3.78 2.11h-.26l4.69-4.69v.26c0 2.46-1.97 4.43-4.43 4.43" />
  </svg>
);
export default SvgCirclefilledpatterndiagonallinerectangleBold;
