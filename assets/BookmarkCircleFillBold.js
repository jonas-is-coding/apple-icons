import * as React from "react";
const SvgBookmarkcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m-3.34-5.93c-.56 0-.96-.41-.96-1.04v-9.89c0-1.23.69-1.93 1.92-1.93h4.77c1.22 0 1.91.7 1.91 1.93v9.89c0 .63-.38 1.04-.96 1.04-.36 0-.6-.17-1.05-.62l-2.24-2.21c-.02-.04-.07-.04-.09 0l-2.23 2.21c-.46.45-.7.62-1.07.62" />
  </svg>
);
export default SvgBookmarkcirclefillBold;
