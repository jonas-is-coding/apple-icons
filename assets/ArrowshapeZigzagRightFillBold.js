import * as React from "react";
const SvgArrowshapezigzagrightfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M18.202 22.349c.74 0 1.31-.29 2-.94l9.34-8.69c.47-.45.69-1.05.69-1.55 0-.52-.21-1.09-.69-1.54l-9.34-8.64c-.76-.71-1.28-.99-1.98-.99-1.11 0-1.93.87-1.93 1.96v3.87h-6.59c-2.44 0-3.5 1.11-3.5 3.53v1.86h-2.89c-2.14 0-3.31 1.12-3.31 3.21v4.56c0 2.13 1.11 3.19 3.31 3.19h7.13c2.31 0 3.33-1.04 3.33-3.34v-2.03h2.52v3.62c0 1.09.82 1.92 1.91 1.92m-6.56-3.32-3.86-1.66c-1.17-.54-1.76-1.45-1.79-2.65 0-.26.29-.29.37-.05.33 1.15 1.24 2.14 3.1 2.14h2.33v2.14c0 .11-.07.13-.15.08" />
  </svg>
);
export default SvgArrowshapezigzagrightfillBold;
