import * as React from "react";
const SvgCirclebadgeplusfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.766c1.6 0 3.13-.32 4.54-.88a7.92 7.92 0 0 1-2.12-5.37c0-4.35 3.58-7.93 7.93-7.93q1.005 0 1.92.24c-.77-6.07-6.01-10.83-12.28-10.83-6.78 0-12.36 5.59-12.36 12.38 0 6.8 5.58 12.39 12.37 12.39m10.35-.07c3.36 0 6.18-2.82 6.18-6.18 0-3.38-2.79-6.16-6.18-6.16-3.37 0-6.16 2.78-6.16 6.16 0 3.37 2.79 6.18 6.16 6.18m0-2.18c-.56 0-.94-.38-.94-.94v-2.11h-2.09c-.56 0-.94-.38-.94-.95 0-.56.36-.94.94-.94h2.09v-2.08c0-.57.38-.95.94-.95.57 0 .95.37.95.95v2.08h2.1c.56 0 .93.38.93.94 0 .57-.37.95-.93.95h-2.1v2.11c0 .56-.38.94-.95.94" />
  </svg>
);
export default SvgCirclebadgeplusfillBold;
