import * as React from "react";
const SvgArrowshapeturnuprightcircleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-3.08a9.29 9.29 0 0 1-9.29-9.29c0-5.15 4.16-9.29 9.29-9.29 5.15 0 9.3 4.14 9.3 9.29 0 5.13-4.15 9.29-9.3 9.29m-5.15-4.28c.39 0 .71-.16.99-.66.8-1.48 1.96-2.19 3.98-2.19h.1v1.95c0 .55.41.96.96.96.38 0 .66-.15 1.01-.47l4.78-4.45c.25-.22.35-.53.35-.77 0-.27-.1-.56-.35-.79l-4.78-4.43c-.39-.35-.65-.49-1-.49-.56 0-.97.43-.97.97v1.98h-.1c-3.92 0-5.9 2.52-5.9 6.75 0 1.09.38 1.64.93 1.64" />
  </svg>
);
export default SvgArrowshapeturnuprightcircleBold;
