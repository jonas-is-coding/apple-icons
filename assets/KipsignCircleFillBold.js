import * as React from "react";
const SvgKipsigncirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m-2.61-6.87c-.68 0-1.1-.45-1.1-1.13l-.01-4.24h-.89c-.22 0-.37-.15-.37-.37 0-.21.15-.35.37-.35h.89v-3.83c0-.69.42-1.12 1.11-1.12.67 0 1.09.43 1.09 1.12v3.83h.54l3.2-4.38c.23-.35.49-.57.9-.57.49 0 1.02.36 1.02.91 0 .23-.09.47-.25.68l-2.62 3.36h2.89c.21 0 .38.14.38.35 0 .2-.17.37-.38.37h-2.93l2.66 3.54c.21.29.3.52.3.85 0 .39-.27.98-1.07.98-.48 0-.75-.23-1-.64l-3.14-4.73h-.5l.01 4.24c0 .68-.43 1.13-1.1 1.13" />
  </svg>
);
export default SvgKipsigncirclefillBold;
