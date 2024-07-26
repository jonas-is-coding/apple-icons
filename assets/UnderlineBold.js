import * as React from "react";
const SvgUnderlineBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M7.422 17.922c4.51 0 7.41-2.57 7.41-6.44v-9.71c0-1.12-.71-1.77-1.82-1.77s-1.81.65-1.81 1.77v9.35c0 2.28-1.38 3.73-3.78 3.73-2.41 0-3.79-1.45-3.79-3.73v-9.35c0-1.12-.71-1.77-1.82-1.77-1.1 0-1.8.65-1.8 1.77v9.71c0 3.87 2.89 6.44 7.41 6.44m-6.36 3.94h12.7c.62 0 1.07-.44 1.07-1.04s-.45-1.04-1.07-1.04h-12.7c-.6 0-1.06.44-1.06 1.04s.46 1.04 1.06 1.04" />
  </svg>
);
export default SvgUnderlineBold;
