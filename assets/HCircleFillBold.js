import * as React from "react";
const SvgHcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m-3.59-6.71c-.99 0-1.58-.65-1.58-1.75v-7.92c0-1.1.59-1.74 1.58-1.74s1.59.64 1.59 1.74v2.7h4.01v-2.7c0-1.1.58-1.74 1.57-1.74s1.58.64 1.58 1.74v7.92c0 1.1-.59 1.75-1.58 1.75s-1.57-.65-1.57-1.75v-2.83h-4.01v2.83c0 1.1-.6 1.75-1.59 1.75" />
  </svg>
);
export default SvgHcirclefillBold;
