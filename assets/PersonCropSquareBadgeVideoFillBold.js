import * as React from "react";
const SvgPersoncropsquarebadgevideofillBold = ({
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
    <path d="M4.142 22.402h10.62v-2.94H4.052c1.03-2.49 3.84-4.22 7.15-4.22 1.01 0 2.32.16 3.61.82.22-1.95 1.7-3.3 3.9-3.3h3.69v-8.65c0-2.66-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.18c0 2.66 1.46 4.11 4.14 4.11m7.06-8.97c-2.23-.01-3.94-1.89-3.94-4.3-.01-2.29 1.74-4.23 3.94-4.23s3.94 1.94 3.94 4.23c0 2.41-1.71 4.31-3.94 4.3m7.51 11.04h6.09c1.39 0 2.17-.78 2.17-2.11v-5.73c0-1.34-.75-2.1-2.15-2.1h-6.11c-1.36 0-2.18.76-2.18 2.1v5.82c0 1.34.8 2.02 2.18 2.02m9-2.93 1.96 1.65c.3.25.59.42.9.42.52 0 .88-.35.88-.91v-6.33c0-.58-.36-.93-.88-.93-.31 0-.6.18-.9.44l-1.96 1.65Z" />
  </svg>
);
export default SvgPersoncropsquarebadgevideofillBold;
