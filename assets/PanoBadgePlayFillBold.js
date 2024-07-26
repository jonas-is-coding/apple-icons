import * as React from "react";
const SvgPanobadgeplayfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M15.682 18.75c3.56 0 6.12.64 8.08 1.32-.22-.71-.35-1.47-.35-2.25 0-4.34 3.59-7.93 7.95-7.93V2.71c0-1.63-.83-2.59-2.31-2.59-2.4 0-5.63 2.83-13.37 2.83C7.932 2.95 4.652 0 2.422 0 .872 0 .002 1 .002 2.69v16.32c0 1.7.87 2.7 2.42 2.7 2.5 0 5.5-2.96 13.26-2.96M31.362 24c3.36 0 6.17-2.81 6.17-6.18s-2.79-6.16-6.17-6.16-6.17 2.79-6.17 6.16c0 3.39 2.79 6.18 6.17 6.18m-2.08-3.81v-4.73c0-.6.6-.87 1.11-.57l3.82 2.32c.51.32.52.94.04 1.22l-3.86 2.32c-.51.31-1.11.04-1.11-.56" />
  </svg>
);
export default SvgPanobadgeplayfillBold;
