import * as React from "react";
const SvgArrowtriangleheadturnuprightcirclefillBold = ({
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
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m-5.33-9.51v-2.77c0-2.05 1.08-3.13 3.15-3.13h3.42v-1.53c0-.87.87-1.21 1.59-.62l3.17 2.53c.71.56.72 1.32 0 1.9l-3.17 2.52c-.72.58-1.59.23-1.59-.62v-1.48h-2.81c-.69 0-1.06.37-1.06 1.14v2.06c0 .87-.52 1.45-1.36 1.46-.82.01-1.34-.59-1.34-1.46" />
  </svg>
);
export default SvgArrowtriangleheadturnuprightcirclefillBold;
