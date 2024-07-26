import * as React from "react";
const SvgIphonegen1Bold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 23.551c0 2.12 1.48 3.55 3.69 3.55h10.15c2.13 0 3.55-1.43 3.55-3.56V3.561c0-2.13-1.42-3.56-3.55-3.56H3.692c-2.21 0-3.69 1.43-3.69 3.56Zm6.05-20.87c0-.36.24-.6.59-.6h4.1c.36 0 .6.24.6.6 0 .35-.24.59-.6.59h-4.1c-.35 0-.59-.24-.59-.59m-3.03 19.24V5.181h11.35v16.74Zm5.69 3.65c-.68 0-1.22-.55-1.22-1.22a1.21 1.21 0 1 1 2.42 0c0 .67-.54 1.22-1.2 1.22" />
  </svg>
);
export default SvgIphonegen1Bold;
