import * as React from "react";
const SvgKBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M2.002 18.07c1.24 0 2.02-.74 2.02-1.96v-3.45l1.72-1.94 4.84 6.18c.61.85 1.1 1.17 1.89 1.17 1.16 0 1.98-.75 1.98-1.79 0-.59-.15-.96-.65-1.63l-5.18-6.59 4.62-4.95c.5-.58.68-.96.68-1.45 0-.93-.74-1.66-1.68-1.66-.62 0-1.09.25-1.57.82l-6.55 7.36h-.1V1.96C4.022.74 3.242 0 2.002 0c-1.25 0-2 .74-2 1.96v14.15c0 1.22.75 1.96 2 1.96" />
  </svg>
);
export default SvgKBold;
