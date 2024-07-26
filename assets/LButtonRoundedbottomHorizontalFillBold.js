import * as React from "react";
const SvgLbuttonroundedbottomhorizontalfillBold = ({
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
    <path d="M9.952 21.454h7.9c6.98 0 9.95-3.06 9.95-9.91v-7.47c0-2.62-1.46-4.07-4.09-4.07H4.102c-2.65 0-4.1 1.44-4.1 4.07v7.47c0 6.85 2.96 9.91 9.95 9.91m2.13-5.8c-.76 0-1.16-.49-1.16-1.26v-7.46c0-.7.48-1.24 1.17-1.24s1.2.53 1.2 1.24v6.79h3.08c.54 0 .98.41.98.96 0 .56-.44.97-.98.97Z" />
  </svg>
);
export default SvgLbuttonroundedbottomhorizontalfillBold;
