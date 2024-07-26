import * as React from "react";
const SvgHeartcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m-2.84-17.6c1.33 0 2.3.78 2.84 1.73.53-.95 1.5-1.73 2.84-1.73 1.94 0 3.44 1.5 3.44 3.68 0 3.58-4.03 6.39-5.59 7.36-.21.12-.48.28-.68.28-.19 0-.5-.16-.71-.28-1.56-.97-5.59-3.78-5.59-7.36 0-2.18 1.5-3.68 3.45-3.68" />
  </svg>
);
export default SvgHeartcirclefillBold;
