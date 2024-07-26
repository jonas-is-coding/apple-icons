import * as React from "react";
const SvgRectangleonrectangleangledBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M2.064 18.746c.46 2.62 2.15 3.78 4.78 3.33l.1-.01c0 2.64 1.45 4.1 4.13 4.1h15.98c2.67 0 4.13-1.46 4.13-4.12v-11.27c0-2.66-1.46-4.11-4.13-4.11h-2.5l-.58-3.24c-.46-2.61-2.15-3.79-4.78-3.33l-15.73 2.77c-2.64.47-3.82 2.16-3.37 4.78Zm2.91-.89-1.83-10.37c-.18-.99.23-1.53 1.17-1.69l15.07-2.66c.93-.15 1.51.21 1.69 1.18l.41 2.35h-10.41c-2.68 0-4.13 1.45-4.13 4.11v8.22l-.3.04c-.92.17-1.5-.2-1.67-1.18m6.43 5.28c-.95 0-1.44-.47-1.44-1.46v-10.54c0-.99.49-1.45 1.44-1.45h15.31c.93 0 1.45.46 1.45 1.45v10.54c0 .99-.52 1.46-1.45 1.46Z" />
  </svg>
);
export default SvgRectangleonrectangleangledBold;
