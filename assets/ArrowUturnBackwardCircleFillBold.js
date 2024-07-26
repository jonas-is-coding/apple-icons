import * as React from "react";
const SvgArrowuturnbackwardcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m6.18-10.89c0 2.93-1.97 4.86-4.92 4.86h-1.73c-.72 0-1.21-.46-1.21-1.13 0-.65.49-1.09 1.21-1.09h1.73c1.6 0 2.67-1.05 2.67-2.64 0-1.53-1.07-2.56-2.69-2.56h-3.49l-.97-.07.62.42 1.3 1.13c.21.2.33.45.33.72 0 .59-.48 1.08-1.04 1.08-.28 0-.55-.1-.75-.3l-3.24-3.28c-.22-.24-.34-.52-.34-.8 0-.29.13-.57.34-.8l3.24-3.27c.2-.21.44-.31.72-.31.57 0 1.06.49 1.06 1.06 0 .27-.11.54-.32.73l-1.17 1.08-.75.55.97-.07h3.49c2.97 0 4.94 1.87 4.94 4.69" />
  </svg>
);
export default SvgArrowuturnbackwardcirclefillBold;
