import * as React from "react";
const SvgRighttrianglesplitdiagonalfillBold = ({
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
    <path d="M23.23 21.456c.08-.26.11-.58.11-.92V2.505c0-1.59-.98-2.51-2.27-2.51-.88 0-1.56.38-2.27 1.09l-7.97 7.97Zm-20.72 1.89 18.03-.01c.33 0 .65-.04.91-.12L9.06 10.825l-7.96 7.96c-.71.71-1.1 1.41-1.1 2.27 0 1.29.91 2.29 2.51 2.29" />
  </svg>
);
export default SvgRighttrianglesplitdiagonalfillBold;
