import * as React from "react";
const SvgArrowuprightandarrowdownleftcirclefillBold = ({
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
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m5.28-12.37h-3.88c-.91 0-1.4-.48-1.4-1.4v-3.89c0-.59.47-1.06 1.07-1.06.57 0 1.05.47 1.05 1.06v.41l-.17 1.41 2.45-2.61c.45-.5 1.23-.48 1.71-.01.47.48.48 1.25-.01 1.71l-2.61 2.42 1.39-.17h.4c.58 0 1.06.46 1.06 1.05 0 .6-.48 1.08-1.06 1.08m-6.34 6.34c-.59 0-1.07-.47-1.07-1.07v-.41l.18-1.4-2.45 2.62c-.45.49-1.23.47-1.7 0-.48-.47-.48-1.25 0-1.7l2.61-2.44-1.38.18h-.4c-.6 0-1.07-.47-1.07-1.05 0-.6.47-1.07 1.07-1.07h3.88c.9 0 1.39.47 1.39 1.38v3.89c0 .6-.48 1.07-1.06 1.07" />
  </svg>
);
export default SvgArrowuprightandarrowdownleftcirclefillBold;
