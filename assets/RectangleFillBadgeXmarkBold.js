import * as React from "react";
const SvgRectanglefillbadgexmarkBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.888 22.402h17.12c2.69 0 4.14-1.45 4.14-4.11V4.112c0-2.66-1.45-4.11-4.14-4.11h-19.69c-2.68 0-4.14 1.45-4.14 4.11v6.21c4.35 0 7.92 3.59 7.92 7.92 0 1.53-.43 2.96-1.21 4.16m-6.71 2.02c3.36 0 6.16-2.8 6.16-6.18 0-3.37-2.77-6.16-6.16-6.16s-6.18 2.79-6.18 6.16c0 3.39 2.79 6.18 6.18 6.18m-1.53-3.27c-.36.38-.98.34-1.34-.02-.38-.35-.4-.99-.03-1.35l1.55-1.55-1.46-1.47c-.36-.37-.37-.97 0-1.33.36-.35.96-.35 1.32 0l1.48 1.48 1.54-1.56c.38-.38.98-.33 1.34.03.36.38.41.97.03 1.34l-1.55 1.56 1.46 1.46c.36.37.36.95 0 1.32-.36.36-.95.36-1.32.01l-1.47-1.47Z" />
  </svg>
);
export default SvgRectanglefillbadgexmarkBold;
