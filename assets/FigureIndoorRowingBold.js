import * as React from "react";
const SvgFigureindoorrowingBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M7.692 5.517c1.52 0 2.75-1.23 2.75-2.75 0-1.54-1.23-2.77-2.75-2.77a2.76 2.76 0 1 0 0 5.52m-6.52 9.23c-.56 2.08.79 3.43 2.41 3.43.52 0 1.07-.13 1.59-.41l6.5-3.46 7.18 3.6c.96.48 1.75.08 2.05-.54.31-.61.13-1.46-.79-1.92l-7.6-3.81c-.54-.28-1.12-.28-1.67-.05l-4.64 2.01.9-3.17c.16-.56.64-.93 1.23-.93h10.31c.76 0 1.37-.61 1.37-1.39 0-.75-.61-1.37-1.37-1.37H7.432c-2.47 0-4.5 1.43-5.08 3.58Zm-.27 7.5h21.19c.5 0 .9-.4.9-.91 0-.5-.4-.9-.9-.9H.902c-.5 0-.9.4-.9.9 0 .51.4.91.9.91" />
  </svg>
);
export default SvgFigureindoorrowingBold;
