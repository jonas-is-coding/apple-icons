import * as React from "react";
const SvgTcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m-.01-6.69c-1.04 0-1.63-.69-1.63-1.81v-7.04h-2.12c-.82 0-1.33-.46-1.33-1.24s.51-1.24 1.33-1.24h7.51c.83 0 1.35.46 1.35 1.24s-.52 1.24-1.35 1.24h-2.13v7.04c0 1.12-.59 1.81-1.63 1.81" />
  </svg>
);
export default SvgTcirclefillBold;
