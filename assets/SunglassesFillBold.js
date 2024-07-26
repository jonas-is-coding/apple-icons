import * as React from "react";
const SvgSunglassesfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M19.442 5.296c.32 0 .59.19.74.52l1.2 2.73c1.6 3.58 4.47 5.01 7.54 5.01 4.51 0 7.5-2.83 8.5-7.95l.25-1.41c.28-1.48 1.22-1.98 1.22-2.88 0-.77-.55-1.32-1.61-1.32-3.9 0-7.54.2-9.65.52-4.25.63-6.14 1.77-8.19 1.77-2.04 0-3.93-1.14-8.18-1.77-2.11-.32-5.77-.52-9.65-.52-1.06 0-1.61.55-1.61 1.32 0 .9.94 1.4 1.2 2.88l.27 1.41c1 5.12 3.99 7.95 8.5 7.95 3.07 0 5.94-1.43 7.54-5.01l1.2-2.73c.15-.33.42-.52.73-.52" />
  </svg>
);
export default SvgSunglassesfillBold;
