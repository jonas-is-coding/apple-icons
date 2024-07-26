import * as React from "react";
const SvgIcloudandarrowupfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 14.37c0 3.33 2.58 6.01 6.57 6.01h7.3v4.33a1.355 1.355 0 0 0 2.71 0v-4.33h-2.71v-6.41l.19-1.72-.62.84-1.43 1.52c-.23.25-.55.39-.89.39-.62 0-1.17-.46-1.17-1.13 0-.33.13-.59.36-.83l3.84-3.68c.36-.35.71-.48 1.07-.48s.72.13 1.08.48l3.83 3.68c.23.24.38.5.38.83 0 .67-.57 1.13-1.19 1.13-.34 0-.65-.14-.88-.39l-1.43-1.52-.62-.83.19 1.71v6.41h7.95c3.77 0 6.17-2.19 6.17-5.37 0-2.67-1.42-4.78-3.8-5.69-.01-5.42-3.92-9.32-9.02-9.32-3.03 0-5.48 1.48-7.07 3.71-2.98-.65-6.21 1.54-6.41 4.88-2.73.54-4.4 2.87-4.4 5.78" />
  </svg>
);
export default SvgIcloudandarrowupfillBold;
