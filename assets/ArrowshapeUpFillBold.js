import * as React from "react";
const SvgArrowshapeupfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M11.172 0c-.5 0-1.11.22-1.54.69l-8.69 9.33c-.65.7-.94 1.28-.94 2 0 1.1.82 1.93 1.91 1.93h3.92v8.76c0 2 1.16 3.16 3.14 3.16h4.32c1.99 0 3.15-1.16 3.15-3.16v-8.76h3.95c1.09 0 1.94-.83 1.94-1.94 0-.7-.27-1.22-.97-1.99L12.712.69c-.45-.48-1.02-.69-1.54-.69" />
  </svg>
);
export default SvgArrowshapeupfillBold;
