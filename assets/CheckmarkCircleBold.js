import * as React from "react";
const SvgCheckmarkcircleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-3.08a9.29 9.29 0 0 1-9.29-9.29c0-5.15 4.16-9.29 9.29-9.29 5.15 0 9.3 4.14 9.3 9.29 0 5.13-4.15 9.29-9.3 9.29m-1.23-3.71c.48 0 .92-.25 1.2-.67l5.02-7.77c.19-.28.32-.57.32-.86 0-.69-.61-1.17-1.26-1.17-.44 0-.81.24-1.09.71l-4.21 6.77-1.96-2.4c-.29-.37-.61-.52-.99-.52-.68 0-1.23.54-1.23 1.22 0 .33.1.61.35.91l2.62 3.13c.34.42.74.65 1.23.65" />
  </svg>
);
export default SvgCheckmarkcircleBold;
