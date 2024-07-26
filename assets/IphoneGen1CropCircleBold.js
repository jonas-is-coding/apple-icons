import * as React from "react";
const SvgIphonegen1CropcircleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m6.78-14.74c0-1.66-1.12-2.76-2.79-2.76h-7.88c-1.72 0-2.88 1.1-2.88 2.76v8.73a9.26 9.26 0 0 1-2.52-6.36c0-5.15 4.16-9.29 9.29-9.29 5.15 0 9.3 4.14 9.3 9.29 0 2.46-.95 4.7-2.52 6.36Zm-8.83-.72c0-.27.19-.45.46-.45h3.2c.26 0 .44.18.44.45 0 .28-.18.44-.44.44h-3.2c-.27 0-.46-.16-.46-.44m2.05 12.38a9.1 9.1 0 0 1-4.53-1.18v-9.28h9.07v9.29a9.27 9.27 0 0 1-4.54 1.17" />
  </svg>
);
export default SvgIphonegen1CropcircleBold;
