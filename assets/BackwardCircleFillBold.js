import * as React from "react";
const SvgBackwardcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m-8.49-12.45c0-.41.25-.69.68-.94l5.3-3.12c.24-.14.46-.2.72-.2.5 0 .94.38.94 1.06v2.76c.1-.2.3-.36.56-.5l5.31-3.12c.24-.14.47-.2.72-.2.51 0 .94.38.94 1.06v6.41c0 .69-.43 1.06-.95 1.06-.25 0-.47-.07-.71-.19l-5.31-3.13c-.26-.14-.45-.31-.56-.52v2.78c0 .69-.44 1.06-.94 1.06-.26 0-.48-.07-.72-.19l-5.3-3.13c-.43-.25-.68-.54-.68-.95" />
  </svg>
);
export default SvgBackwardcirclefillBold;
