import * as React from "react";
const SvgIpadgen2LandscapebadgeplayBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.472 19.382c-.94 0-1.44-.46-1.44-1.45V4.492c0-1 .5-1.47 1.43-1.47h19.62c.94 0 1.44.47 1.44 1.47v6.05c1.01-.07 2.09.09 3.03.47v-6.9c0-2.66-1.46-4.11-4.14-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.18c0 2.66 1.47 4.11 4.15 4.11h14.89c-.56-.89-.92-1.92-1.03-3.02Zm21.42 5.24c3.35 0 6.16-2.81 6.16-6.18s-2.79-6.16-6.16-6.16c-3.39 0-6.18 2.79-6.18 6.16 0 3.38 2.79 6.18 6.18 6.18m-2.09-3.81v-4.73c0-.6.6-.88 1.1-.57l3.82 2.32c.52.32.53.94.06 1.22l-3.88 2.32c-.5.31-1.1.04-1.1-.56m-14.09-3.69c-.36 0-.63.26-.63.64 0 .39.27.64.63.64h8.25c0-.36.06-.91.13-1.28Z" />
  </svg>
);
export default SvgIpadgen2LandscapebadgeplayBold;
