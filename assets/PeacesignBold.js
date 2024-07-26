import * as React from "react";
const SvgPeacesignBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m-9.29-12.37c0-4.71 3.49-8.6 8.03-9.21v8.25l-6.54 6.01a9.27 9.27 0 0 1-1.49-5.05m10.58-.93v-8.28a9.29 9.29 0 0 1 8.01 9.21c0 1.86-.54 3.6-1.49 5.06Zm-2.55 3.54v6.6a9.24 9.24 0 0 1-4.87-2.23Zm2.55.04 4.84 4.35c-1.33 1.16-3 1.95-4.84 2.21Z" />
  </svg>
);
export default SvgPeacesignBold;
