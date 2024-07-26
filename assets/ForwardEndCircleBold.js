import * as React from "react";
const SvgForwardendcircleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-3.08a9.29 9.29 0 0 1-9.29-9.29c0-5.15 4.16-9.29 9.29-9.29 5.15 0 9.3 4.14 9.3 9.29 0 5.13-4.15 9.29-9.3 9.29m-4.04-5.22c.23 0 .46-.06.67-.2l5.06-2.96c.22-.14.4-.29.5-.47v2.98c0 .52.27.76.78.76h1.19c.52 0 .76-.24.76-.76v-6.83c0-.52-.25-.77-.76-.77h-1.19c-.51 0-.78.26-.78.77v2.98c-.1-.18-.28-.32-.5-.46l-5.06-2.95c-.21-.15-.44-.2-.67-.2-.49 0-.89.36-.89 1.02v6.07c0 .65.41 1.02.89 1.02" />
  </svg>
);
export default SvgForwardendcircleBold;
