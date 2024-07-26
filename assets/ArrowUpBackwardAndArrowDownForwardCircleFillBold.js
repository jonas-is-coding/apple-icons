import * as React from "react";
const SvgArrowupbackwardandarrowdownforwardcirclefillBold = ({
  title,
  titleId,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m-5.25-12.15c-.59 0-1.09-.48-1.09-1.08v-4.04c0-.93.51-1.41 1.42-1.41h4.03c.6 0 1.08.5 1.08 1.09 0 .6-.48 1.07-1.08 1.07h-.48l-1.42-.18 2.29 2.11c.5.46.48 1.26.01 1.74-.49.48-1.29.5-1.75 0l-2.12-2.3.19 1.43v.49c0 .6-.49 1.08-1.08 1.08m6.11 6.11c-.6 0-1.08-.48-1.08-1.09 0-.6.48-1.07 1.08-1.07h.48l1.42.18-2.29-2.11c-.5-.46-.48-1.26-.01-1.74.49-.48 1.29-.5 1.75 0l2.11 2.3-.18-1.43v-.49c0-.6.49-1.08 1.08-1.08.6 0 1.09.48 1.09 1.08v4.04c0 .93-.51 1.41-1.42 1.41Z" />
  </svg>
);
export default SvgArrowupbackwardandarrowdownforwardcirclefillBold;
