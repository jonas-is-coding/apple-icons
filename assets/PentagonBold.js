import * as React from "react";
const SvgPentagonBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m.263 12.217 3.43 10.44c.62 1.9 2 2.93 4.02 2.93h11.01c2.02 0 3.4-1.03 4.02-2.93l3.43-10.42c.64-1.94.1-3.59-1.49-4.76l-8.94-6.57c-1.66-1.21-3.39-1.21-5.04 0l-8.94 6.57c-1.6 1.17-2.14 2.82-1.5 4.74m2.83-.78c-.23-.71-.07-1.2.56-1.68l8.68-6.39c.61-.45 1.16-.45 1.78 0l8.67 6.39c.63.48.8.98.56 1.71l-3.34 10.13c-.22.71-.69 1.04-1.43 1.04H7.863c-.74 0-1.21-.33-1.43-1.04Z" />
  </svg>
);
export default SvgPentagonBold;
