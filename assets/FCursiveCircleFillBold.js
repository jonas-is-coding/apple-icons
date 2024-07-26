import * as React from "react";
const SvgFcursivecirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m-5.08-7.14c0-.63.44-1.06 1.11-1.06.42 0 .66.08 1.27.08.65 0 .99-.38 1.1-1.22l.35-2.36h-1.92c-.69 0-1.17-.47-1.17-1.14 0-.69.48-1.17 1.16-1.17h2.26l.24-1.63c.3-2.12 1.55-3.28 3.51-3.28 1.41 0 2.27.49 2.27 1.35 0 .57-.4 1.03-1 1.03-.41 0-.7-.07-1.25-.07-.75 0-1.11.38-1.25 1.36l-.17 1.24h2.32c.71 0 1.2.48 1.2 1.17 0 .67-.48 1.14-1.2 1.14h-2.67l-.37 2.61c-.31 2.12-1.55 3.28-3.51 3.28-1.44 0-2.28-.5-2.28-1.33" />
  </svg>
);
export default SvgFcursivecirclefillBold;
