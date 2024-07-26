import * as React from "react";
const SvgMoonphasewaxingcrescentBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m9.3-12.37c.01 5.13-4.09 9.3-9.22 9.3-.19 0-.39-.01-.59-.03 2.73-2.11 4.31-5.37 4.31-9.26 0-3.9-1.58-7.17-4.32-9.27.21-.02.41-.03.62-.03 5.11 0 9.2 4.17 9.2 9.29" />
  </svg>
);
export default SvgMoonphasewaxingcrescentBold;
