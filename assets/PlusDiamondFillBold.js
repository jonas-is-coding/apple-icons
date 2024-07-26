import * as React from "react";
const SvgPlusdiamondfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m1.43 16.724 9.43 9.43c1.9 1.89 3.95 1.9 5.84.01l9.47-9.46c1.89-1.88 1.87-3.94-.01-5.84l-9.44-9.43c-1.9-1.9-3.96-1.91-5.84-.02l-9.47 9.46c-1.89 1.89-1.88 3.95.02 5.85m6.62-2.93c0-.8.58-1.38 1.36-1.38h3v-3c0-.79.59-1.37 1.38-1.37.8 0 1.39.58 1.39 1.37v3h3.01c.77 0 1.36.58 1.36 1.38s-.59 1.38-1.36 1.38h-3.01v3c0 .79-.59 1.36-1.39 1.36-.79 0-1.38-.57-1.38-1.36v-3h-3c-.78 0-1.36-.58-1.36-1.38" />
  </svg>
);
export default SvgPlusdiamondfillBold;
