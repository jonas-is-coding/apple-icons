import * as React from "react";
const Svg7SquareBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m.32-3.02c-.93 0-1.44-.46-1.44-1.45V4.484c0-.99.51-1.46 1.44-1.46h13.48c.94 0 1.44.47 1.44 1.46v13.45c0 .99-.5 1.45-1.44 1.45Zm5.49-2.72c.6 0 .95-.25 1.36-.95l3.83-6.73c.32-.55.43-.95.43-1.41 0-.93-.68-1.55-1.78-1.55h-5.47c-.74 0-1.21.42-1.21 1.1s.47 1.11 1.21 1.11h4.19v.11l-3.69 6.23c-.17.27-.26.54-.26.86 0 .74.58 1.23 1.39 1.23" />
  </svg>
);
export default Svg7SquareBold;
