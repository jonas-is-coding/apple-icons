import * as React from "react";
const SvgCamerameteringpartialBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M24.952 10.252h3.02v-6.14c0-2.66-1.45-4.11-4.14-4.11h-8.89v3.02h8.57c.93 0 1.44.46 1.44 1.45Zm-24.95 0h3.02v-5.78c0-.99.51-1.45 1.44-1.45h8.58V.002h-8.9c-2.68 0-4.14 1.45-4.14 4.11Zm18.29 0h2.02c-.46-3.06-3.14-5.45-6.31-5.45-3.21 0-5.9 2.39-6.35 5.45h2c.44-1.97 2.23-3.48 4.35-3.48 2.09 0 3.87 1.51 4.29 3.48m-14.15 12.15h8.9v-3.02h-8.58c-.93 0-1.44-.46-1.44-1.45v-5.78H.002v6.14c0 2.66 1.46 4.11 4.14 4.11m10.8 0h8.89c2.69 0 4.14-1.45 4.14-4.11v-6.14h-3.02v5.78c0 .99-.51 1.45-1.44 1.45h-8.57Zm5.37-10.25h-2.02c-.44 1.98-2.2 3.48-4.29 3.48a4.43 4.43 0 0 1-4.33-3.48h-2.02c.47 3.08 3.14 5.45 6.35 5.45 3.17 0 5.83-2.37 6.31-5.45" />
  </svg>
);
export default SvgCamerameteringpartialBold;
