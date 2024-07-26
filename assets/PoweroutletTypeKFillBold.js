import * as React from "react";
const SvgPoweroutlettypekfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m-4.85-10.07a2.46 2.46 0 0 1-2.45-2.45c0-1.35 1.1-2.44 2.45-2.44s2.45 1.09 2.45 2.44c0 1.34-1.1 2.45-2.45 2.45m9.7 0c-1.34 0-2.44-1.11-2.44-2.45 0-1.35 1.1-2.44 2.44-2.44 1.35 0 2.44 1.09 2.44 2.44 0 1.34-1.09 2.45-2.44 2.45m-6.3 1.77h2.91c.39 0 .63.22.63.6v.88c0 1.16-.93 2.09-2.09 2.09-1.17 0-2.07-.91-2.07-2.09v-.88c0-.38.22-.6.62-.6" />
  </svg>
);
export default SvgPoweroutlettypekfillBold;
