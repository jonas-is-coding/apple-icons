import * as React from "react";
const SvgSquarebadgeplusfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M24.448.002h-14.13c-2.68 0-4.14 1.45-4.14 4.11v6.21c4.36 0 7.93 3.58 7.93 7.92 0 1.53-.44 2.96-1.21 4.16h11.55c2.68 0 4.13-1.45 4.13-4.11V4.112c0-2.66-1.45-4.11-4.13-4.11m-18.27 24.42c3.36 0 6.16-2.8 6.16-6.18 0-3.37-2.77-6.16-6.16-6.16s-6.18 2.79-6.18 6.16c0 3.39 2.79 6.18 6.18 6.18m0-2.18c-.56 0-.94-.38-.94-.93v-2.12h-2.11c-.55 0-.94-.37-.94-.93 0-.57.38-.94.94-.94h2.11v-2.1c0-.55.38-.94.94-.94s.94.38.94.94v2.1h2.11c.55 0 .92.37.92.94 0 .56-.37.93-.92.93h-2.11v2.12c0 .55-.38.93-.94.93" />
  </svg>
);
export default SvgSquarebadgeplusfillBold;
