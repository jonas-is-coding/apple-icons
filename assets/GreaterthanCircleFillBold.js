import * as React from "react";
const SvgGreaterthancirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m-2.99-7.46c-.78 0-1.34-.56-1.34-1.35 0-.65.3-1.04 1.09-1.36l4.78-2.15v-.11l-4.78-2.2c-.78-.32-1.09-.71-1.09-1.36 0-.78.56-1.34 1.33-1.34.32 0 .55.06.81.19l6.8 3.47c.61.31.92.74.92 1.33 0 .61-.31.99-.92 1.28l-6.8 3.41c-.26.13-.49.19-.8.19" />
  </svg>
);
export default SvgGreaterthancirclefillBold;
