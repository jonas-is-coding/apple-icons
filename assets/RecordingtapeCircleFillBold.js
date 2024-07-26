import * as React from "react";
const SvgRecordingtapecirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m-8.07-12.37c0-2.05 1.65-3.7 3.69-3.7 2.05 0 3.7 1.65 3.7 3.7 0 .8-.25 1.57-.74 2.19h2.85c-.48-.62-.72-1.39-.72-2.19 0-2.05 1.65-3.7 3.69-3.7 2.05 0 3.69 1.65 3.69 3.7 0 2.04-1.64 3.7-3.69 3.7h-8.78c-2.04 0-3.69-1.66-3.69-3.7m1.66-.01c0 1.12.92 2.05 2.04 2.05 1.14 0 2.03-.92 2.03-2.05s-.9-2.03-2.03-2.03c-1.11 0-2.04.9-2.04 2.03m8.78 0c0 1.13.89 2.05 2.02 2.05s2.05-.93 2.05-2.05c0-1.13-.93-2.03-2.05-2.03s-2.02.9-2.02 2.03" />
  </svg>
);
export default SvgRecordingtapecirclefillBold;
