import * as React from "react";
const SvgRectanglefillbadgeplusBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.888 22.402h17.12c2.69 0 4.14-1.45 4.14-4.11V4.112c0-2.66-1.45-4.11-4.14-4.11h-19.69c-2.68 0-4.14 1.45-4.14 4.11v6.21c4.35 0 7.92 3.59 7.92 7.92 0 1.53-.43 2.96-1.21 4.16m-6.71 2.02c3.36 0 6.16-2.8 6.16-6.18 0-3.37-2.77-6.16-6.16-6.16s-6.18 2.79-6.18 6.16c0 3.39 2.79 6.18 6.18 6.18m0-2.18c-.56 0-.94-.38-.94-.93v-2.12h-2.11c-.55 0-.94-.37-.94-.93 0-.57.38-.94.94-.94h2.11v-2.1c0-.55.38-.94.94-.94s.94.38.94.94v2.1h2.11c.55 0 .92.37.92.94 0 .56-.37.93-.92.93h-2.11v2.12c0 .55-.38.93-.94.93" />
  </svg>
);
export default SvgRectanglefillbadgeplusBold;
