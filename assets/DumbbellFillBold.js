import * as React from "react";
const SvgDumbbellfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M8.482 19.145c1.91 0 3.2-1.34 3.2-3.23V3.245c0-1.9-1.29-3.25-3.2-3.25s-3.2 1.35-3.2 3.25v12.67c0 1.89 1.29 3.23 3.2 3.23m16.58 0c1.91 0 3.2-1.34 3.2-3.23V3.245c0-1.9-1.29-3.25-3.2-3.25s-3.19 1.35-3.19 3.25v12.67c0 1.89 1.28 3.23 3.19 3.23m-23.03-2.96c1.14 0 2.02-.88 2.02-2.01v-9.21c0-1.13-.88-2.02-2.02-2.02s-2.03.89-2.03 2.02v9.21c0 1.13.89 2.01 2.03 2.01m29.42 0c1.15 0 2.04-.88 2.04-2.01v-9.21c0-1.13-.89-2.02-2.04-2.02-1.14 0-2.03.89-2.03 2.02v9.21c0 1.13.89 2.01 2.03 2.01m-18.48-3.87h7.61v-5.48h-7.61Z" />
  </svg>
);
export default SvgDumbbellfillBold;
