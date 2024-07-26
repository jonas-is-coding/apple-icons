import * as React from "react";
const SvgArrowshapeturnuprightfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M13.568 22.349c.74 0 1.32-.29 2.01-.94l9.34-8.69c.47-.45.69-1.05.69-1.55 0-.52-.21-1.09-.69-1.54l-9.34-8.64c-.76-.71-1.28-.99-2-.99-1.1 0-1.92.87-1.92 1.96v3.79h-.21c-7.59 0-11.45 4.92-11.45 13.18 0 2.18.71 3.28 1.83 3.28.8 0 1.44-.31 1.97-1.33 1.53-2.8 3.76-4.23 7.65-4.23h.21v3.78c0 1.09.82 1.92 1.91 1.92" />
  </svg>
);
export default SvgArrowshapeturnuprightfillBold;
