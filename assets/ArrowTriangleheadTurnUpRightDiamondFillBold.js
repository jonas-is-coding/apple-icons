import * as React from "react";
const SvgArrowtriangleheadturnuprightdiamondfillBold = ({
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
    <path d="m1.43 16.724 9.43 9.43c1.9 1.89 3.95 1.9 5.84.01l9.47-9.46c1.89-1.88 1.87-3.94-.01-5.84l-9.44-9.43c-1.9-1.9-3.96-1.91-5.84-.02l-9.47 9.46c-1.89 1.89-1.88 3.95.02 5.85m7.03-.07v-2.77c0-2.05 1.08-3.13 3.15-3.13h3.43v-1.53c0-.87.86-1.21 1.58-.62l3.17 2.53c.71.56.72 1.32 0 1.9l-3.17 2.52c-.72.58-1.58.23-1.58-.62v-1.48h-2.82c-.69 0-1.06.37-1.06 1.14v2.06c0 .87-.52 1.45-1.36 1.46-.82.01-1.34-.59-1.34-1.46" />
  </svg>
);
export default SvgArrowtriangleheadturnuprightdiamondfillBold;
