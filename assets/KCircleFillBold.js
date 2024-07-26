import * as React from "react";
const SvgKcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m-3.24-6.83c-.93 0-1.47-.6-1.47-1.64v-7.9c0-1.05.54-1.65 1.47-1.65.95 0 1.48.61 1.48 1.65v3.16h.1l3.67-4.13c.4-.48.72-.68 1.22-.68.75 0 1.37.54 1.37 1.22 0 .4-.12.67-.44 1.03l-2.58 2.81 2.82 3.75c.26.38.37.66.37 1.05 0 .77-.6 1.33-1.43 1.33-.52 0-.89-.21-1.27-.72l-2.66-3.61-1.17 1.29v1.47c0 1-.56 1.57-1.48 1.57" />
  </svg>
);
export default SvgKcirclefillBold;
