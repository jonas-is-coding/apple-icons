import * as React from "react";
const SvgComputermousefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.372 7.516h7.23v-7.52c-4.58.32-6.72 2.58-7.23 7.52m9.68 0h7.23c-.51-4.91-2.62-7.19-7.23-7.52Zm-1.23 19.65c5.77 0 8.83-3.46 8.83-9.94 0-2.66-.07-5.18-.19-7.27H.192c-.12 2.09-.19 4.61-.19 7.27 0 6.48 3.06 9.94 8.82 9.94" />
  </svg>
);
export default SvgComputermousefillBold;
