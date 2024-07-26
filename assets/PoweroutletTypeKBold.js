import * as React from "react";
const SvgPoweroutlettypekBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-3.08a9.29 9.29 0 0 1-9.29-9.29c0-5.15 4.16-9.29 9.29-9.29 5.15 0 9.3 4.14 9.3 9.29 0 5.13-4.15 9.29-9.3 9.29m-4.57-6.99c1.27 0 2.3-1.04 2.3-2.3a2.3 2.3 0 0 0-2.3-2.3c-1.26 0-2.29 1.03-2.29 2.3 0 1.26 1.03 2.3 2.29 2.3m9.14 0c1.27 0 2.3-1.04 2.3-2.3a2.3 2.3 0 0 0-2.3-2.3c-1.26 0-2.29 1.03-2.29 2.3 0 1.26 1.03 2.3 2.29 2.3m-5.94 1.68c-.37 0-.58.21-.58.57v.83c0 1.1.84 1.97 1.95 1.97 1.1 0 1.96-.87 1.96-1.97v-.83c0-.36-.21-.57-.59-.57Z" />
  </svg>
);
export default SvgPoweroutlettypekBold;
