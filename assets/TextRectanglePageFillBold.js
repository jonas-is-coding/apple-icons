import * as React from "react";
const SvgTextrectanglepagefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 21.652c0 2.69 1.45 4.14 4.11 4.14h12.55c2.66 0 4.12-1.45 4.12-4.14V4.142c0-2.68-1.46-4.14-4.12-4.14H4.112c-2.66 0-4.11 1.46-4.11 4.14Zm6.14-15.02c-.49 0-.84-.36-.84-.83 0-.46.35-.82.84-.82h8.76c.49 0 .84.36.84.82 0 .47-.35.83-.84.83Zm0 3.48c-.49 0-.84-.36-.84-.83 0-.46.35-.81.84-.81h5.08c.49 0 .84.35.84.81 0 .47-.35.83-.84.83Zm.16 11.09c-.97 0-1.53-.53-1.53-1.53v-6.22c0-.99.56-1.51 1.53-1.51h8.21c.99 0 1.51.52 1.51 1.51v6.22c0 1-.52 1.53-1.51 1.53Z" />
  </svg>
);
export default SvgTextrectanglepagefillBold;
