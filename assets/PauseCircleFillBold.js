import * as React from "react";
const SvgPausecirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m-3.58-7.44c-.66 0-1.01-.38-1.01-.97v-7.93c0-.58.35-.96 1.01-.96h1.41c.66 0 1.01.38 1.01.96v7.93c0 .59-.35.97-1.01.97Zm5.77 0c-.66 0-1.02-.38-1.02-.97v-7.93c0-.58.36-.96 1.02-.96h1.41c.66 0 1.01.38 1.01.96v7.93c0 .59-.35.97-1.01.97Z" />
  </svg>
);
export default SvgPausecirclefillBold;
