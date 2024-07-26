import * as React from "react";
const SvgFiguremixedcardioBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M11.273 5.46c1.5 0 2.72-1.23 2.72-2.74A2.73 2.73 0 0 0 11.273 0c-1.51 0-2.73 1.23-2.73 2.72 0 1.51 1.22 2.74 2.73 2.74m0 11.39 2.79 4.38 2.16 5.97c.27.74 1 .98 1.61.76.65-.22.98-.97.74-1.62l-2.19-6.03-2.18-5.98V8.92c0-.21.08-.39.29-.49l7.4-3.94c.6-.32.84-1.08.5-1.69-.31-.62-1.06-.83-1.67-.52l-7.14 3.79c-.78.41-1.53.6-2.31.6-.77 0-1.51-.19-2.3-.6l-7.14-3.79c-.61-.31-1.35-.1-1.68.52-.34.61-.09 1.37.52 1.69l7.39 3.94c.2.1.29.28.29.49v5.41l-2.18 5.98-2.2 6.03c-.23.65.11 1.4.75 1.62.6.22 1.34-.02 1.61-.76l2.15-5.97Z" />
  </svg>
);
export default SvgFiguremixedcardioBold;
