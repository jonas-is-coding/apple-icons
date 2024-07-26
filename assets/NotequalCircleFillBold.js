import * as React from "react";
const SvgNotequalcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m4.26-11.28c.93 0 1.53.5 1.53 1.33 0 .84-.62 1.33-1.53 1.33h-5.18l-1.19 1.84c-.36.63-1.02.84-1.65.47-.61-.38-.76-1.02-.36-1.67l.44-.64h-.57c-.93 0-1.55-.49-1.55-1.33s.6-1.33 1.55-1.33h2.13l1.38-2.13h-3.51c-.93 0-1.55-.48-1.55-1.32s.6-1.33 1.55-1.33h5.06l1.29-2.06c.39-.64 1.02-.85 1.65-.46.62.37.75 1.01.37 1.65l-.55.87h.69c.93 0 1.53.49 1.53 1.33s-.62 1.32-1.53 1.32h-2.24l-1.38 2.13Z" />
  </svg>
);
export default SvgNotequalcirclefillBold;
