import * as React from "react";
const SvgAlignverticalbottomfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M6.142 24.286h4.38c1.92 0 3.08-1.19 3.08-3.13V3.126c0-1.95-1.16-3.13-3.08-3.13h-4.38c-1.92 0-3.08 1.18-3.08 3.13v18.03c0 1.94 1.16 3.13 3.08 3.13m12.6 0h4.38c1.91 0 3.08-1.19 3.08-3.13v-10.1c0-1.95-1.17-3.13-3.08-3.13h-4.38c-1.93 0-3.1 1.18-3.1 3.13v10.1c0 1.94 1.17 3.13 3.1 3.13m-17.35 4.84h26.44c.76 0 1.38-.66 1.38-1.42 0-.78-.62-1.42-1.38-1.42H1.392c-.77 0-1.39.64-1.39 1.42 0 .76.62 1.42 1.39 1.42" />
  </svg>
);
export default SvgAlignverticalbottomfillBold;
