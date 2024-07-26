import * as React from "react";
const SvgButtonangledbottomhorizontalleftfillBold = ({
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
    <path d="M31.402 11.709v-7.65c0-2.49-1.57-4.06-4.06-4.06H4.052c-2.48 0-4.05 1.58-4.05 4.08v7.63c0 3.29 1.47 5.39 4.84 6.37l10.1 2.97c2.88.84 4.83.5 7.41-.85l6.51-3.38c2.02-1.06 2.54-2.4 2.54-5.11" />
  </svg>
);
export default SvgButtonangledbottomhorizontalleftfillBold;
