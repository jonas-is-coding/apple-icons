import * as React from "react";
const SvgSpaceBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 5.804c0 1.81 1.05 2.91 2.92 2.91h24.11c1.87 0 2.92-1.1 2.92-2.91v-4.21a1.596 1.596 0 0 0-3.19 0v3.42c0 .35-.27.62-.62.62H3.812c-.38 0-.62-.26-.62-.62v-3.42a1.596 1.596 0 0 0-3.19 0Z" />
  </svg>
);
export default SvgSpaceBold;
