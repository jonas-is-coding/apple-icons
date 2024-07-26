import * as React from "react";
const SvgEnvelopefrontfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 21.183h21.33c2.49 0 3.95-1.45 3.95-4.11V4.113c0-2.66-1.47-4.11-4.13-4.11H3.952c-2.49 0-3.95 1.45-3.95 4.11v12.96c0 2.66 1.46 4.11 4.14 4.11m17.09-12.78c-.57 0-.99-.43-.99-1v-2.4c0-.57.42-1.01.99-1.01h3.3c.57 0 1 .44 1 1.01v2.4c0 .57-.43 1-1 1Zm-11.06 4.6c-.48 0-.87-.38-.87-.86s.39-.86.87-.86h9c.49 0 .87.38.87.86s-.38.86-.87.86Zm0 3.23a.87.87 0 0 1-.87-.87c0-.48.39-.86.87-.86h6.47c.48 0 .87.38.87.86s-.39.87-.87.87Z" />
  </svg>
);
export default SvgEnvelopefrontfillBold;
