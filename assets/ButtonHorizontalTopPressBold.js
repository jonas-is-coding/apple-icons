import * as React from "react";
const SvgButtonhorizontaltoppressBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m15.532 13.237 3.49-3.96c.72-.82.29-1.95-.87-1.95h-2.06v-5.94c0-.84-.61-1.39-1.38-1.39-.78 0-1.39.55-1.39 1.39v5.94h-2.08c-1.1 0-1.57 1.12-.85 1.95l3.48 3.96c.47.54 1.18.54 1.66 0m-8.3 15.6h14.96c4.43 0 7.23-2.88 7.23-7.44v-4.11c0-4.02-2.89-6.61-7.23-6.61h-2.04l-2.67 3.01h4.71c2.49 0 4.21 1.43 4.21 3.61 0 2.17-1.72 3.59-4.21 3.59H7.232c-2.49 0-4.22-1.42-4.22-3.59 0-2.18 1.73-3.61 4.22-3.61h4.7l-2.65-3.01h-2.05c-4.33 0-7.22 2.59-7.23 6.61v4.11c0 4.56 2.8 7.44 7.23 7.44m0-4.93h14.96c1.54 0 2.89-.33 4-.93-.53 1.77-1.97 2.84-4 2.84H7.232c-2.03 0-3.47-1.07-4-2.84 1.12.6 2.46.93 4 .93" />
  </svg>
);
export default SvgButtonhorizontaltoppressBold;
