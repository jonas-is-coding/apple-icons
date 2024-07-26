import * as React from "react";
const SvgCloudcircleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-3.08a9.29 9.29 0 0 1-9.29-9.29c0-5.15 4.16-9.29 9.29-9.29 5.15 0 9.3 4.14 9.3 9.29 0 5.13-4.15 9.29-9.3 9.29m-4.01-5.06h7.46c2 0 3.56-1.51 3.56-3.47 0-2-1.57-3.51-3.68-3.5-.76-1.53-2.16-2.38-3.91-2.38a4.43 4.43 0 0 0-4.44 3.96c-1.21.4-1.97 1.39-1.97 2.62 0 1.63 1.2 2.77 2.98 2.77" />
  </svg>
);
export default SvgCloudcircleBold;
