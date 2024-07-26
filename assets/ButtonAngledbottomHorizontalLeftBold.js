import * as React from "react";
const SvgButtonangledbottomhorizontalleftBold = ({
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
    <path d="M31.402 11.709v-7.65c0-2.49-1.57-4.06-4.06-4.06H4.052c-2.48 0-4.05 1.58-4.05 4.08v7.63c0 3.29 1.47 5.39 4.84 6.37l10.1 2.97c2.88.84 4.83.5 7.41-.85l6.51-3.38c2.02-1.06 2.54-2.4 2.54-5.11m-3.02 0c0 1.44-.29 2.14-1.36 2.68l-6.3 3.25c-1.89.97-3.14 1.15-5.5.44l-9.48-2.82c-2-.6-2.72-1.63-2.72-3.55v-7.3c0-.85.53-1.39 1.36-1.39l22.63-.01c.84 0 1.37.54 1.37 1.37Z" />
  </svg>
);
export default SvgButtonangledbottomhorizontalleftBold;
