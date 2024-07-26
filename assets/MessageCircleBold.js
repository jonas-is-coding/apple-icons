import * as React from "react";
const SvgMessagecircleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-3.08a9.29 9.29 0 0 1-9.29-9.29c0-5.15 4.16-9.29 9.29-9.29 5.15 0 9.3 4.14 9.3 9.29 0 5.13-4.15 9.29-9.3 9.29m0-4.78c3.39 0 6.03-2.21 6.03-4.97 0-2.74-2.64-4.96-6.03-4.96-3.37 0-6.01 2.22-6.01 4.96 0 1.65.99 3.06 2.45 4.01.13.08.12.2.05.35-.21.41-.52.8-.75 1.09-.32.38-.19.79.34.79.62 0 1.72-.51 2.87-1.2.13-.08.22-.12.35-.1.2.02.44.03.7.03" />
  </svg>
);
export default SvgMessagecircleBold;
