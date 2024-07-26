import * as React from "react";
const SvgHatcapfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M1.698 17.232c5.42-.21 18.78-2.45 22.88-6.51-2.89-6.93-6.56-9.62-12.89-9.06l-.09-.65c-.12-.72-.9-1.13-1.76-.98l-1.03.19c-.88.17-1.37.85-1.25 1.6l.1.61c-6.3 2.06-8.55 7.97-7.35 13.61.2.95.59 1.22 1.39 1.19m25.18 2.52c3.31 0 5.51-2.52 6.24-4.26.53-1.35.1-2.03-.91-2.34l-5.62-1.67c-1.83 2.12-5.47 3.9-10.16 5.07 3.09 1.55 7.01 3.2 10.45 3.2" />
  </svg>
);
export default SvgHatcapfillBold;
