import * as React from "react";
const SvgArchiveboxcircleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-3.08a9.29 9.29 0 0 1-9.29-9.29c0-5.15 4.16-9.29 9.29-9.29 5.15 0 9.3 4.14 9.3 9.29 0 5.13-4.15 9.29-9.3 9.29m-4.94-11.66h9.89c.76 0 1.13-.42 1.13-1.17v-.59c0-.75-.37-1.18-1.13-1.18h-9.89c-.73 0-1.15.43-1.15 1.18v.59c0 .75.39 1.17 1.15 1.17m1.76 8.11h6.36c1.26 0 1.99-.69 1.99-1.98v-5.13H7.192v5.13c0 1.29.73 1.98 2 1.98m1.37-4.6c-.31 0-.55-.24-.55-.56v-.18c0-.34.23-.57.55-.57h3.62c.33 0 .55.23.55.57v.18c0 .32-.22.56-.55.56Z" />
  </svg>
);
export default SvgArchiveboxcircleBold;
