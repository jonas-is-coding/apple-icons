import * as React from "react";
const SvgFrancsigncirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m-1.85-6.79c-.69 0-1.15-.46-1.15-1.17v-.73h-1.16a.365.365 0 0 1 0-.73h1.16v-7.05c0-.75.42-1.2 1.15-1.2h4.91c.6 0 1.01.38 1.01.93 0 .56-.41.94-1.01.94h-3.77v2.68h3.43c.58 0 .96.36.96.89s-.38.89-.96.89h-3.43v1.92h2.56c.2 0 .37.17.37.37 0 .19-.17.36-.37.36h-2.56v.73c0 .71-.46 1.17-1.14 1.17" />
  </svg>
);
export default SvgFrancsigncirclefillBold;
