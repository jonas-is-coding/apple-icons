import * as React from "react";
const SvgMcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m-4.52-6.68c-.74 0-1.16-.46-1.16-1.28v-8.58c0-.95.64-1.58 1.62-1.58.88 0 1.43.42 1.72 1.27l2.31 6.35h.08l2.3-6.35c.28-.85.83-1.27 1.72-1.27.97 0 1.62.63 1.62 1.58v8.58c0 .82-.44 1.28-1.18 1.28-.73 0-1.17-.46-1.17-1.28v-5.89h-.11l-2.11 5.7c-.21.57-.57.83-1.14.83s-.93-.27-1.11-.83l-2.09-5.7h-.12v5.89c0 .82-.44 1.28-1.18 1.28" />
  </svg>
);
export default SvgMcirclefillBold;
