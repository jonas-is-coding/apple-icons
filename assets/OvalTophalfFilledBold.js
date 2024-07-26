import * as React from "react";
const SvgOvaltophalffilledBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 11.942c0 7.07 6.47 11.95 15.88 11.95s15.88-4.88 15.88-11.95c0-7.06-6.47-11.94-15.88-11.94S.002 4.882.002 11.942m3.26 0h25.24c0 5.12-5.16 8.69-12.62 8.69-7.47 0-12.62-3.57-12.62-8.69" />
  </svg>
);
export default SvgOvaltophalffilledBold;
