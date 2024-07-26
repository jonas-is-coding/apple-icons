import * as React from "react";
const SvgCharacterduployanBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-15.02c-1.87 0-3.33-1.44-3.33-3.32 0-1.87 1.46-3.32 3.33-3.32 1.88 0 3.34 1.45 3.34 3.32 0 1.88-1.46 3.32-3.34 3.32m0 11.94a9.29 9.29 0 0 1-9.29-9.29c0-2.74 1.18-5.2 3.06-6.9-.05.3-.07.62-.07.93 0 3.46 2.85 6.3 6.3 6.3 3.46 0 6.31-2.84 6.31-6.3 0-.31-.03-.63-.07-.93a9.27 9.27 0 0 1 3.06 6.9c0 5.13-4.15 9.29-9.3 9.29" />
  </svg>
);
export default SvgCharacterduployanBold;
