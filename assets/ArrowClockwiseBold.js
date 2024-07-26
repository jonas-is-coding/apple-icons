import * as React from "react";
const SvgArrowclockwiseBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 15.294c0 5.89 4.77 10.66 10.66 10.66 5.9 0 10.67-4.77 10.67-10.66 0-.93-.65-1.56-1.54-1.56-.87 0-1.48.63-1.48 1.56 0 4.22-3.43 7.64-7.65 7.64s-7.65-3.42-7.65-7.64a7.65 7.65 0 0 1 7.65-7.65c.49 0 .95.03 1.34.11l-2.58 2.55c-.26.25-.41.56-.41.97 0 .82.64 1.46 1.46 1.46.41 0 .74-.14 1.01-.39l4.78-4.86c.33-.31.48-.66.48-1.09 0-.41-.17-.78-.48-1.09l-4.78-4.87c-.27-.28-.61-.43-1.02-.43-.81 0-1.45.66-1.45 1.5 0 .41.15.72.41.98l2.33 2.25c-.33-.06-.7-.1-1.09-.1a10.65 10.65 0 0 0-10.66 10.66" />
  </svg>
);
export default SvgArrowclockwiseBold;
