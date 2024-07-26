import * as React from "react";
const SvgWindowhorizontalBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 19.848c0 .85.69 1.53 1.52 1.53h29.45c.84 0 1.54-.68 1.54-1.53 0-.84-.7-1.52-1.54-1.52h-.44v-15.7c0-1.57-1.06-2.63-2.64-2.63H4.602c-1.58 0-2.64 1.06-2.64 2.63v15.7h-.44c-.83 0-1.52.68-1.52 1.52m4.99-10.68v-5.84c0-.18.11-.29.28-.29h9.76v6.13Zm12.47 0v-6.13h9.76c.18 0 .28.11.28.29v5.84Zm-12.47 9.16v-6.11h22.51v6.11Z" />
  </svg>
);
export default SvgWindowhorizontalBold;
