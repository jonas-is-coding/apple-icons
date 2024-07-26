import * as React from "react";
const SvgBackwardendcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m-5.2-8.76v-7.21c0-.53.28-.8.81-.8h1.28c.52 0 .79.29.79.8v3.15c.11-.18.3-.35.54-.49l5.32-3.12c.24-.14.46-.19.7-.19.53 0 .95.38.95 1.07v6.39c0 .69-.43 1.08-.95 1.08-.24 0-.46-.07-.7-.21l-5.32-3.12c-.24-.14-.42-.3-.54-.49v3.14c0 .53-.27.8-.79.8h-1.28c-.53 0-.81-.27-.81-.8" />
  </svg>
);
export default SvgBackwardendcirclefillBold;
