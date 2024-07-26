import * as React from "react";
const SvgButtonangledbottomhorizontalrightfillBold = ({
  title,
  titleId,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 11.709c0 2.71.54 4.05 2.54 5.11l6.52 3.38c2.58 1.35 4.53 1.69 7.4.85l10.1-2.97c3.37-.98 4.84-3.08 4.84-6.37v-7.63c0-2.5-1.55-4.08-4.04-4.08h-23.3c-2.49 0-4.06 1.57-4.06 4.06Z" />
  </svg>
);
export default SvgButtonangledbottomhorizontalrightfillBold;
