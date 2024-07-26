import * as React from "react";
const SvgCcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m-.02-6.64c-3.28 0-5.4-2.27-5.4-5.78 0-3.49 2.12-5.78 5.4-5.78 2.18 0 3.98 1.02 4.62 2.63.11.26.15.48.15.76 0 .75-.49 1.2-1.34 1.2-.61 0-.93-.21-1.26-.8-.4-.86-1.14-1.32-2.12-1.32-1.48 0-2.43 1.3-2.43 3.31 0 2.03.95 3.32 2.43 3.32.98 0 1.72-.46 2.11-1.3.3-.56.69-.8 1.27-.8.85 0 1.34.45 1.34 1.2 0 .25-.04.5-.15.76-.64 1.59-2.42 2.6-4.62 2.6" />
  </svg>
);
export default SvgCcirclefillBold;
