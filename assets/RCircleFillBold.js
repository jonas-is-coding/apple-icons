import * as React from "react";
const SvgRcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m-3.24-6.71c-.91 0-1.4-.59-1.4-1.57v-7.91c0-1.11.55-1.75 1.64-1.75h3.33c2.73 0 4.35 1.34 4.35 3.64 0 1.51-.88 2.74-2.25 3.17l1.52 2.26c.22.31.31.58.31.93 0 .73-.54 1.23-1.32 1.23-.62 0-.97-.25-1.45-1.01l-1.77-2.89h-1.55v2.33c0 .98-.51 1.57-1.41 1.57m1.41-5.98h1.77c1.08 0 1.76-.57 1.76-1.54 0-1-.68-1.6-1.72-1.6h-1.81Z" />
  </svg>
);
export default SvgRcirclefillBold;
