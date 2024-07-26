import * as React from "react";
const SvgLocationcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m-6.09-11.41c-1.16 0-1.54-1.38-.35-1.92l10.33-4.81c1.13-.51 2.15.51 1.63 1.62l-4.78 10.36c-.53 1.17-1.92.81-1.92-.38v-4.44c0-.25-.18-.43-.42-.43Z" />
  </svg>
);
export default SvgLocationcirclefillBold;
