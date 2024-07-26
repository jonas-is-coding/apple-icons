import * as React from "react";
const SvgRbuttonroundedbottomhorizontalfillBold = ({
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
    <path d="M9.952 21.454h7.9c6.98 0 9.95-3.06 9.95-9.91v-7.47c0-2.62-1.46-4.07-4.09-4.07H4.102c-2.65 0-4.1 1.44-4.1 4.07v7.47c0 6.85 2.96 9.91 9.95 9.91m1.5-5.8c-.78 0-1.2-.48-1.2-1.26v-7.41c0-.83.48-1.3 1.2-1.3h2.75c2.2 0 3.72 1.15 3.72 3.29 0 1.19-.64 2.3-1.69 2.8l1.18 1.94c.15.24.27.54.27.85 0 .65-.43 1.09-1.09 1.09-.57 0-.92-.23-1.23-.81l-1.46-2.68h-1.25v2.23c0 .74-.39 1.26-1.2 1.26m1.2-5.2h1.29c1.01 0 1.57-.5 1.57-1.44 0-.92-.59-1.49-1.54-1.49h-1.32Z" />
  </svg>
);
export default SvgRbuttonroundedbottomhorizontalfillBold;
