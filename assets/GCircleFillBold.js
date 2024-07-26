import * as React from "react";
const SvgGcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-6.62c-3.3 0-5.45-2.27-5.45-5.8 0-3.51 2.15-5.81 5.43-5.81 2.26 0 3.97 1 4.56 2.46.1.23.15.46.15.72 0 .69-.47 1.12-1.24 1.12-.73 0-1.04-.29-1.3-.7-.4-.79-1.06-1.27-2.08-1.27-1.51 0-2.48 1.4-2.48 3.48 0 2.12.98 3.56 2.51 3.56 1.34 0 2.09-.73 2.09-1.8v-.46h-1.33c-.65 0-1.02-.38-1.02-.93 0-.58.36-.95 1.02-.95h2.8c.9 0 1.38.49 1.38 1.4v.55c0 2.56-1.93 4.43-5.04 4.43" />
  </svg>
);
export default SvgGcirclefillBold;
