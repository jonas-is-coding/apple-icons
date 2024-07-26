import * as React from "react";
const SvgVisionprobadgeplayfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M32.19 12.343c3.36 0 6.17-2.82 6.17-6.18 0-3.37-2.78-6.16-6.17-6.16s-6.17 2.79-6.17 6.16c0 3.39 2.78 6.18 6.17 6.18M8.21 22.533c4.96 0 7.24-4.09 9.86-4.09 2.63 0 4.89 4.09 9.86 4.09 4.58 0 7.99-3.86 8.18-9.2 0-.09.01-.23 0-.32-1.15.7-2.51 1.1-3.94 1.1-4.36 0-7.95-3.59-7.95-7.95 0-1.22.3-2.38.79-3.41-2.15-.23-4.49-.29-6.94-.29-9.86 0-18.07.89-18.07 10.26 0 5.64 3.46 9.81 8.21 9.81m21.91-14v-4.74c0-.59.58-.86 1.1-.56l3.82 2.32c.51.32.53.94.05 1.22l-3.87 2.32c-.52.31-1.1.04-1.1-.56" />
  </svg>
);
export default SvgVisionprobadgeplayfillBold;
