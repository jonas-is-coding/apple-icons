import * as React from "react";
const SvgArrowdownleftandarrowuprightcirclefillBold = ({
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
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m5.22-12.15c-.59 0-1.08-.48-1.08-1.08v-.49l.18-1.43-2.11 2.3c-.46.5-1.26.48-1.75 0-.47-.48-.49-1.28.01-1.74l2.29-2.11-1.42.18h-.48c-.6 0-1.08-.47-1.08-1.07 0-.59.48-1.09 1.08-1.09h4.03c.91 0 1.42.48 1.42 1.41v4.04c0 .6-.49 1.08-1.09 1.08m-6.11 6.11h-4.03c-.91 0-1.42-.48-1.42-1.41v-4.04c0-.6.5-1.08 1.09-1.08s1.08.48 1.08 1.08v.49l-.19 1.43 2.12-2.3c.46-.5 1.26-.48 1.75 0 .47.48.49 1.28-.01 1.74l-2.29 2.11 1.42-.18h.48c.6 0 1.08.47 1.08 1.07 0 .61-.48 1.09-1.08 1.09" />
  </svg>
);
export default SvgArrowdownleftandarrowuprightcirclefillBold;
