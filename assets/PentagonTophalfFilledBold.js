import * as React from "react";
const SvgPentagontophalffilledBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m.26 12.226 3.43 10.44c.62 1.9 2.01 2.93 4.02 2.93h11.02c2.01 0 3.4-1.03 4.02-2.93l3.43-10.42c.63-1.94.09-3.59-1.5-4.76L15.74.915c-1.65-1.22-3.39-1.22-5.04 0l-8.94 6.57c-1.6 1.17-2.13 2.82-1.5 4.74m3.53 1.33h18.86L20 21.606c-.22.71-.69 1.04-1.43 1.04H7.86c-.72 0-1.2-.33-1.43-1.04Z" />
  </svg>
);
export default SvgPentagontophalffilledBold;
