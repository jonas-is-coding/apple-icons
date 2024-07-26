import * as React from "react";
const SvgLockopenlaptopcomputerBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 18.767c0 .97.81 1.76 1.77 1.76h32.21c.96 0 1.77-.79 1.77-1.76 0-.98-.81-1.77-1.77-1.77h-2.33V3.327c0-2.13-1.21-3.33-3.34-3.33H7.442c-2.09 0-3.34 1.2-3.34 3.33v13.67h-2.33c-.96 0-1.77.79-1.77 1.77m7.12-1.77V4.067c0-.72.35-1.04 1.05-1.04h19.41c.7 0 1.05.32 1.05 1.04v12.93Zm6.66-3.92c0 .7.33 1.04.98 1.04h4.11c.65 0 .98-.34.98-1.04v-3.1c0-.66-.28-1-.84-1.05v-.85c0-.79.39-1.28 1.13-1.28.75 0 1.15.49 1.15 1.28v.63c0 .38.31.68.68.68.36 0 .67-.3.67-.68v-.63c0-1.53-.97-2.6-2.5-2.6-1.51 0-2.48 1.07-2.48 2.67v.77h-2.9c-.65 0-.98.34-.98 1.06Z" />
  </svg>
);
export default SvgLockopenlaptopcomputerBold;
