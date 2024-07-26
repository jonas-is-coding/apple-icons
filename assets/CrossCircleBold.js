import * as React from "react";
const SvgCrosscircleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-3.08a9.29 9.29 0 0 1-9.29-9.29c0-5.15 4.16-9.29 9.29-9.29 5.15 0 9.3 4.14 9.3 9.29 0 5.13-4.15 9.29-9.3 9.29m-6.35-8.35c0 .88.6 1.47 1.48 1.47h2.44v2.44c0 .9.58 1.48 1.47 1.48h1.9c.89 0 1.48-.58 1.48-1.48v-2.44h2.45c.87 0 1.46-.59 1.46-1.47v-1.91c0-.87-.59-1.47-1.46-1.47h-2.45v-2.42c0-.91-.59-1.48-1.48-1.48h-1.9c-.89 0-1.47.57-1.47 1.48v2.42h-2.45c-.88 0-1.47.6-1.47 1.47Z" />
  </svg>
);
export default SvgCrosscircleBold;
