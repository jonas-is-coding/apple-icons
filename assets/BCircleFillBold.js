import * as React from "react";
const SvgBcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m-2.8-6.9c-1.12 0-1.72-.6-1.72-1.72v-7.59c0-1.13.61-1.73 1.72-1.73h3.71c2.14 0 3.49 1.05 3.49 2.72 0 1.22-.82 2.17-2.1 2.42v.09c1.65.21 2.64 1.23 2.64 2.76 0 1.83-1.59 3.05-3.93 3.05Zm1.12-6.55h1.41c1.2 0 1.85-.48 1.85-1.32 0-.78-.58-1.26-1.54-1.26h-1.72Zm0 4.55h1.52c1.43 0 2.13-.47 2.13-1.42 0-.89-.67-1.42-1.8-1.42h-1.85Z" />
  </svg>
);
export default SvgBcirclefillBold;
