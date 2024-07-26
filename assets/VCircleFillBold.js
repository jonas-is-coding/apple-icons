import * as React from "react";
const SvgVcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m-.02-6.65c-1.34 0-1.99-.54-2.4-1.8l-2.65-7.42c-.1-.31-.13-.52-.13-.78 0-.89.63-1.46 1.56-1.46.88 0 1.31.4 1.55 1.38l2.03 7.04h.11l2.03-7.04c.23-.98.66-1.38 1.54-1.38.94 0 1.59.57 1.59 1.44 0 .26-.04.48-.14.8l-2.63 7.35c-.43 1.28-1.14 1.87-2.46 1.87" />
  </svg>
);
export default SvgVcirclefillBold;
