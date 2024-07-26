import * as React from "react";
const SvgMagnifyingglasscirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m-1.18-8.47c-2.81 0-5.15-2.32-5.15-5.14 0-2.83 2.34-5.15 5.15-5.15 2.82 0 5.14 2.32 5.14 5.15 0 .93-.27 1.81-.71 2.56l2.65 2.65c.28.28.41.63.41.99 0 .8-.58 1.4-1.36 1.4-.4 0-.75-.15-1.04-.45l-2.68-2.64c-.7.4-1.53.63-2.41.63m0-2.1c1.67 0 3.05-1.36 3.05-3.04 0-1.69-1.38-3.05-3.05-3.05-1.68 0-3.05 1.37-3.05 3.05s1.37 3.04 3.05 3.04" />
  </svg>
);
export default SvgMagnifyingglasscirclefillBold;
