import * as React from "react";
const SvgMinusarrowtriangleheadcounterclockwiseBold = ({
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
    <path d="M12.372 26.772c6.83 0 12.38-5.55 12.38-12.37 0-5.93-4.17-10.89-9.72-12.08v-1.4c0-.94-.79-1.17-1.46-.65l-3.88 2.89c-.5.36-.49.99 0 1.36l3.89 2.88c.66.51 1.45.27 1.45-.65v-1.23a9.236 9.236 0 0 1 6.64 8.88c0 5.13-4.15 9.29-9.3 9.29a9.29 9.29 0 0 1-9.29-9.29c0-2.81 1.23-5.25 3.23-6.99.67-.66.89-1.57.29-2.28-.56-.65-1.54-.74-2.32 0a12.19 12.19 0 0 0-4.28 9.27c0 6.82 5.54 12.37 12.37 12.37m-4.18-11.05h8.38c.77 0 1.33-.52 1.33-1.3 0-.77-.55-1.3-1.33-1.3h-8.38c-.79 0-1.35.53-1.35 1.3 0 .78.58 1.3 1.35 1.3" />
  </svg>
);
export default SvgMinusarrowtriangleheadcounterclockwiseBold;
