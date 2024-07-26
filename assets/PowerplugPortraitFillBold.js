import * as React from "react";
const SvgPowerplugportraitfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M7.372 28.145h2.84c1.61 0 2.46-.85 2.46-2.48v-4.18c0-1.33.52-2 1.64-2.86 2.08-1.64 3.27-4.07 3.27-6.67v-3.12c0-1.15-.68-1.83-1.82-1.84l-1.48-.01v-5.23c0-.96-.78-1.76-1.74-1.76s-1.75.8-1.75 1.76v5.23h-3.97v-5.23c0-.96-.79-1.76-1.74-1.76-.97 0-1.75.8-1.75 1.76v5.23l-1.52.01c-1.14.01-1.81.69-1.81 1.84v3.12c0 2.6 1.18 5.03 3.27 6.67 1.11.86 1.64 1.53 1.64 2.86v4.18c0 1.63.83 2.48 2.46 2.48" />
  </svg>
);
export default SvgPowerplugportraitfillBold;
