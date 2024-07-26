import * as React from "react";
const SvgNairasignBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M3.912 21.552c1.17 0 1.84-.69 1.84-1.9v-8.2h2.47l3.77 8.2c.45 1.15 1.29 1.9 2.68 1.9 1.51 0 2.54-.94 2.54-2.42v-7.68h1.5c.39 0 .71-.31.71-.69 0-.39-.32-.7-.71-.7h-1.5v-8.16c0-1.21-.65-1.9-1.82-1.9-1.18 0-1.83.69-1.83 1.9v8.16h-2.51l-3.74-8.15c-.49-1.21-1.31-1.91-2.68-1.91-1.48 0-2.55.94-2.55 2.42v7.64H.702a.696.696 0 1 0 0 1.39h1.38v8.2c0 1.21.67 1.9 1.83 1.9m1.84-15.26h.11l1.73 3.77h-1.84Zm7.69 8.99-1.75-3.83h1.87v3.83Z" />
  </svg>
);
export default SvgNairasignBold;
