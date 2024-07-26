import * as React from "react";
const SvgYcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-6.71c-1.02 0-1.59-.68-1.59-1.79v-2.01l-3.11-5.4a1.7 1.7 0 0 1-.23-.86c0-.77.61-1.35 1.45-1.35.73 0 1.08.26 1.47 1.08l1.98 3.75h.09l1.99-3.75c.38-.82.73-1.08 1.44-1.08.85 0 1.45.57 1.45 1.37 0 .29-.07.56-.24.84l-3.09 5.39v2.02c0 1.12-.59 1.79-1.61 1.79" />
  </svg>
);
export default SvgYcirclefillBold;
