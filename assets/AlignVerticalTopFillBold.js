import * as React from "react";
const SvgAlignverticaltopfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M1.392 2.826h26.44c.76 0 1.38-.65 1.38-1.41 0-.77-.62-1.42-1.38-1.42H1.392c-.77 0-1.39.65-1.39 1.42 0 .76.62 1.41 1.39 1.41m4.75 26.3h4.38c1.92 0 3.08-1.19 3.08-3.13V7.966c0-1.95-1.16-3.13-3.08-3.13h-4.38c-1.92 0-3.08 1.18-3.08 3.13v18.03c0 1.94 1.16 3.13 3.08 3.13m12.6-7.94h4.38c1.91 0 3.08-1.17 3.08-3.13V7.966c0-1.95-1.17-3.13-3.08-3.13h-4.38c-1.93 0-3.1 1.18-3.1 3.13v10.09c0 1.96 1.17 3.13 3.1 3.13" />
  </svg>
);
export default SvgAlignverticaltopfillBold;
