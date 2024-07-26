import * as React from "react";
const SvgAustralsignBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 15.78c0 .38.31.7.69.7h1.36l-.8 2.49c-.1.34-.15.59-.15.94 0 1.17.86 1.76 1.96 1.76 1.04 0 1.6-.52 1.87-1.5l1.08-3.69h7.34l1.07 3.7c.27 1 .87 1.49 1.91 1.49 1.13 0 1.94-.61 1.94-1.76 0-.31-.07-.61-.17-.94l-.79-2.49h1.34c.39 0 .71-.32.71-.7s-.32-.7-.71-.7h-1.79l-.82-2.58h2.61c.39 0 .71-.31.71-.69 0-.39-.32-.69-.71-.69h-3.05l-2.79-8.77C12.312.75 11.342 0 9.692 0s-2.65.75-3.13 2.35l-2.8 8.77H.692c-.38 0-.69.3-.69.69 0 .38.31.69.69.69h2.62l-.82 2.58h-1.8a.7.7 0 0 0-.69.7m9.61-11.67h.14l2.04 7.01h-4.22Zm-3.2 10.97.76-2.58h5.02l.76 2.58Z" />
  </svg>
);
export default SvgAustralsignBold;
