import * as React from "react";
const SvgArrowuptolinesquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m2.84-15.54c-.61 0-1.08-.48-1.08-1.08s.47-1.08 1.08-1.08h8.59c.61 0 1.08.48 1.08 1.08s-.47 1.08-1.08 1.08Zm4.29 11.14c-.68 0-1.12-.48-1.12-1.18v-4.17l.15-1.84-1.5 1.71-.74.76c-.21.23-.46.37-.8.37-.62 0-1.06-.46-1.06-1.12 0-.25.11-.56.35-.78l3.89-3.82c.21-.21.5-.34.83-.34s.61.14.83.34l3.92 3.82c.24.22.34.52.34.78 0 .65-.45 1.12-1.05 1.12-.34 0-.6-.14-.82-.37l-.77-.77-1.48-1.69.15 1.83v4.17c0 .7-.46 1.18-1.12 1.18" />
  </svg>
);
export default SvgArrowuptolinesquarefillBold;
