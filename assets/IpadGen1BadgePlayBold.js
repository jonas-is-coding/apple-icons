import * as React from "react";
const SvgIpadgen1BadgeplayBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M3.022 22.976V4.896h15.08v10.19c.43-.09.86-.12 1.3-.12.6 0 1.18.08 1.73.22V3.816c0-2.35-1.51-3.82-3.91-3.82H3.902c-2.4 0-3.9 1.47-3.9 3.82v20.24c0 2.36 1.5 3.82 3.9 3.82h9.38c-1.18-1.4-1.75-3.02-1.8-4.9Zm7.55-19.6c-.43 0-.77-.34-.77-.77a.764.764 0 1 1 1.53 0c0 .43-.34.77-.76.77m8.85 25.69c3.36 0 6.16-2.8 6.16-6.18 0-3.37-2.79-6.16-6.16-6.16-3.39 0-6.18 2.79-6.18 6.16 0 3.39 2.79 6.18 6.18 6.18m-2.08-3.81v-4.74c0-.59.59-.86 1.09-.56l3.82 2.32c.52.33.54.94.06 1.22l-3.88 2.32c-.5.32-1.09.04-1.09-.56" />
  </svg>
);
export default SvgIpadgen1BadgeplayBold;
