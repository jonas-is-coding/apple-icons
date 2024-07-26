import * as React from "react";
const SvgArrowtriangleheadbottomleftcapsulepathclockwiseBold = ({
  title,
  titleId,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.92 18.321h1.46v.24c0 4.63 3.12 7.75 7.75 7.75 4.65 0 7.77-3.12 7.77-7.75v-10.8c0-4.64-3.12-7.76-7.77-7.76-4.63 0-7.75 3.12-7.75 7.76v1.54c0 .82.67 1.49 1.49 1.49.81 0 1.48-.67 1.48-1.49v-1.54c0-2.9 1.89-4.81 4.78-4.81 2.9 0 4.8 1.91 4.8 4.81v10.8c0 2.88-1.9 4.78-4.8 4.78-2.89 0-4.78-1.9-4.78-4.78v-.24h1.4c.93 0 1.15-.8.66-1.47l-2.88-3.89c-.38-.49-1-.5-1.36 0l-2.91 3.88c-.5.68-.27 1.48.66 1.48" />
  </svg>
);
export default SvgArrowtriangleheadbottomleftcapsulepathclockwiseBold;
