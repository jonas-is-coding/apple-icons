import * as React from "react";
const SvgGreaterthanBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M1.702 16.954c.52 0 .97-.15 1.43-.36l12.4-5.55c1.23-.56 1.95-1.32 1.95-2.55 0-1.2-.72-1.95-1.95-2.51L3.132.324c-.42-.19-.85-.32-1.34-.32-1.05 0-1.79.8-1.79 1.86 0 .9.46 1.45 1.4 1.84l11.16 4.65v.14l-11.16 4.65c-1.01.4-1.4.98-1.4 1.91 0 1.07.67 1.9 1.7 1.9" />
  </svg>
);
export default SvgGreaterthanBold;
