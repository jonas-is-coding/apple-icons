import * as React from "react";
const SvgHornfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M1.442 17.352c.8 0 1.44-.65 1.44-1.46v-.26h1.41a3.786 3.786 0 0 0 3.51 5.16h6.65c2.01 0 3.69-1.62 3.77-3.63 2.25.98 4.42 2.48 6.5 4.51 2.21 2.12 5.29.89 5.29-2.16V3.222c0-3.04-3.08-4.28-5.29-2.16-4.05 3.92-8.6 6.04-13 6.04h-8.84v-.28a1.44 1.44 0 0 0-2.88 0v9.07c0 .81.64 1.46 1.44 1.46m5.13-.33c0-.68.57-1.24 1.23-1.24h6.55c.26.07.53.14.8.23.32.22.53.6.53 1.01 0 .65-.56 1.22-1.23 1.22h-6.65c-.66 0-1.23-.57-1.23-1.22" />
  </svg>
);
export default SvgHornfillBold;
