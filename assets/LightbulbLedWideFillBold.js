import * as React from "react";
const SvgLightbulbledwidefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.052 5.586h20.15c.04-.15.05-.3.05-.44 0-3.29-3.74-5.15-10.13-5.15-6.38 0-10.12 1.86-10.12 5.15 0 .14.01.29.05.44m7.23 15.87h5.68c.63 0 1-.37 1-1v-1.33c0-5.16 3.83-8.03 5.5-11.16H.802c1.68 3.11 5.48 6.04 5.48 11.16v1.33c0 .63.36 1 1 1m.02 3.08h5.65c.49 0 .88-.41.88-.86a.88.88 0 0 0-.88-.87h-5.65c-.49 0-.87.4-.87.87 0 .45.38.86.87.86m2.82 3.6c1.68 0 2.9-.9 3.1-2.28h-6.18c.18 1.38 1.4 2.28 3.08 2.28" />
  </svg>
);
export default SvgLightbulbledwidefillBold;
