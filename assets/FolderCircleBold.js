import * as React from "react";
const SvgFoldercircleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-3.08a9.29 9.29 0 0 1-9.29-9.29c0-5.15 4.16-9.29 9.29-9.29 5.15 0 9.3 4.14 9.3 9.29 0 5.13-4.15 9.29-9.3 9.29m-6.24-11.28h12.49v-.58c0-1.19-.66-1.84-1.86-1.84h-4.79c-.41 0-.64-.11-.97-.36l-.29-.21c-.42-.29-.68-.42-1.28-.42h-1.56c-1.08 0-1.74.65-1.74 1.82Zm1.86 7.13h8.87c1.11 0 1.76-.65 1.76-1.84v-4.3H6.132v4.3c0 1.19.65 1.84 1.86 1.84" />
  </svg>
);
export default SvgFoldercircleBold;
