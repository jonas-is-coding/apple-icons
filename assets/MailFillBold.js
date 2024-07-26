import * as React from "react";
const SvgMailfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.402h19.69c2.69 0 4.14-1.45 4.14-4.11V4.112c0-2.66-1.45-4.11-4.14-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.18c0 2.66 1.46 4.11 4.14 4.11m15.7-10.92c-1.58 0-2.87-1.29-2.87-2.87 0-1.59 1.29-2.88 2.87-2.88a2.87 2.87 0 0 1 2.86 2.88c0 1.58-1.28 2.87-2.86 2.87m-13.64-3.27c-.53 0-.93-.44-.93-.95 0-.52.39-.95.93-.95h6.47c.52 0 .92.43.92.95 0 .51-.4.95-.92.95Zm0 3.1c-.53 0-.93-.44-.93-.95 0-.52.39-.96.93-.96h4.61c.53 0 .93.43.93.96 0 .51-.41.95-.93.95Z" />
  </svg>
);
export default SvgMailfillBold;
