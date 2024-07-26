import * as React from "react";
const Svg4CirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m1.62-6.75c-.77 0-1.28-.48-1.28-1.37v-.67h-3.74c-1.1 0-1.8-.64-1.8-1.65 0-.45.11-.91.4-1.49.71-1.28 1.83-3.04 2.81-4.6.72-1.17 1.43-1.61 2.73-1.61 1.25 0 2.17.8 2.17 1.9v5.13h.55c.78 0 1.27.46 1.27 1.16 0 .71-.5 1.16-1.28 1.16h-.54v.67c0 .91-.49 1.37-1.29 1.37m-1.28-4.36v-4.88h-.09c-.96 1.59-2.13 3.53-2.83 4.81v.07Z" />
  </svg>
);
export default Svg4CirclefillBold;
