import * as React from "react";
const SvgHeartslashcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m5.05-6.31-11.11-11.1a.73.73 0 0 1 0-1.01c.29-.27.74-.27 1.02 0l11.09 11.1c.28.28.28.71 0 1.01-.27.27-.73.26-1 0m-7.67-11.14c.08 0 .16 0 .26.02 1.07.13 1.89.79 2.36 1.63.53-.92 1.49-1.68 2.79-1.68 1.91 0 3.39 1.46 3.39 3.61 0 1.38-.62 2.64-1.49 3.75Zm4.84 9.72c-.61.47-1.16.84-1.53 1.09-.21.12-.48.28-.68.28-.19 0-.48-.16-.7-.28-1.53-.91-5.48-3.7-5.48-7.23 0-.68.15-1.3.43-1.81Z" />
  </svg>
);
export default SvgHeartslashcirclefillBold;
