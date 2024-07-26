import * as React from "react";
const Svg1CircleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-3.08a9.29 9.29 0 0 1-9.29-9.29c0-5.15 4.16-9.29 9.29-9.29 5.15 0 9.3 4.14 9.3 9.29 0 5.13-4.15 9.29-9.3 9.29m.73-3.83c.88 0 1.45-.49 1.45-1.52v-7.88c0-.92-.64-1.53-1.63-1.53-.62 0-1.11.17-1.78.61l-1.9 1.26c-.41.27-.59.56-.59 1.01 0 .56.41 1.01.96 1.01.24 0 .41-.04.75-.27l1.2-.8h.1v6.59c0 1.03.57 1.52 1.44 1.52" />
  </svg>
);
export default Svg1CircleBold;
