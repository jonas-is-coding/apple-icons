import * as React from "react";
const SvgRectangleportraitbadgeplusfillBold = ({
  title,
  titleId,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M22.838.002h-12.55c-2.66 0-4.11 1.46-4.11 4.14v9.56c4.36.01 7.93 3.58 7.93 7.93 0 1.52-.44 2.95-1.21 4.16h9.94c2.66 0 4.12-1.45 4.12-4.14V4.142c0-2.68-1.46-4.14-4.12-4.14m-16.66 27.81c3.36 0 6.16-2.8 6.16-6.18 0-3.37-2.77-6.16-6.16-6.16s-6.18 2.79-6.18 6.16c0 3.39 2.79 6.18 6.18 6.18m0-2.18c-.56 0-.94-.38-.94-.94v-2.11h-2.11c-.55 0-.94-.37-.94-.94s.38-.95.94-.95h2.11v-2.08c0-.55.38-.94.94-.94s.94.36.94.94v2.08h2.11c.55 0 .92.38.92.95s-.37.94-.92.94h-2.11v2.11c0 .56-.38.94-.94.94" />
  </svg>
);
export default SvgRectangleportraitbadgeplusfillBold;
