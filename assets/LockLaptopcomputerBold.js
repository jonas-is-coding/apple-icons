import * as React from "react";
const SvgLocklaptopcomputerBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 18.767c0 .97.81 1.76 1.77 1.76h32.21c.96 0 1.77-.79 1.77-1.76 0-.98-.81-1.77-1.77-1.77h-2.33V3.327c0-2.13-1.21-3.33-3.34-3.33H7.442c-2.09 0-3.34 1.2-3.34 3.33v13.67h-2.33c-.96 0-1.77.79-1.77 1.77m7.12-1.77V4.067c0-.72.35-1.04 1.05-1.04h19.41c.7 0 1.05.32 1.05 1.04v12.93Zm8.71-2.86h4.1c.68 0 1.02-.36 1.02-1.09v-3.18c0-.62-.24-.96-.75-1.05v-.8c0-1.45-.94-2.47-2.32-2.47-1.37 0-2.32 1.02-2.32 2.47v.8c-.49.09-.75.43-.75 1.05v3.18c0 .73.34 1.09 1.02 1.09m.98-5.35v-.83c0-.73.43-1.21 1.07-1.21.65 0 1.08.48 1.08 1.21v.83Z" />
  </svg>
);
export default SvgLocklaptopcomputerBold;
