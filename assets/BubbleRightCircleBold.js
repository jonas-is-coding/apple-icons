import * as React from "react";
const SvgBubblerightcircleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-3.08a9.29 9.29 0 0 1-9.29-9.29c0-5.15 4.16-9.29 9.29-9.29 5.15 0 9.3 4.14 9.3 9.29 0 5.13-4.15 9.29-9.3 9.29m2.74-2.75c.36 0 .57-.24.57-.62v-1.55h.3c1.49 0 2.53-1 2.53-2.62v-4.27c0-1.62-.97-2.63-2.61-2.63h-7.05c-1.65 0-2.63 1.01-2.63 2.63v4.27c0 1.62.98 2.62 2.63 2.62h3.5l2.04 1.82c.29.25.48.35.72.35" />
  </svg>
);
export default SvgBubblerightcircleBold;
