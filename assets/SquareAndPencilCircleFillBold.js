import * as React from "react";
const SvgSquareandpencilcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.754c6.83 0 12.38-5.55 12.38-12.38S19.202.004 12.372.004.002 5.544.002 12.374s5.54 12.38 12.37 12.38m5.77-16.93-1.14-1.13.56-.55c.27-.27.71-.31.98-.04l.16.17c.27.25.26.66 0 .94Zm-9.45 10.47c-1.32 0-2.16-.83-2.16-2.16v-6.94c0-1.31.84-2.16 2.16-2.16h6.33l-1.59 1.57h-4.71c-.38 0-.62.23-.62.67v6.78c0 .42.24.66.62.66h7.05c.24 0 .43-.24.43-.66v-4.61l1.56-1.57v6.26c0 1.33-.81 2.16-1.98 2.16Zm2.22-3.96c-.27.11-.59-.18-.45-.46l.59-1.18 5.34-5.38 1.15 1.12-5.37 5.38Z" />
  </svg>
);
export default SvgSquareandpencilcirclefillBold;
