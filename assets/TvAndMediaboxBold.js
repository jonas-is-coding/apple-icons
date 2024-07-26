import * as React from "react";
const SvgTvandmediaboxBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M3.622 20.88h10.29v-2.87h-9.99c-.71 0-1.05-.29-1.05-1.05V3.93c0-.77.34-1.06 1.05-1.06h22.86c.71 0 1.05.29 1.05 1.06v10.35h2.87V3.62c0-2.37-1.28-3.62-3.62-3.62H3.622C1.282 0 .002 1.25.002 3.62v13.64c0 2.37 1.28 3.62 3.62 3.62m14.93 5.93h13.72c1.84 0 2.86-1.02 2.86-2.88v-4.99c0-1.87-1.02-2.89-2.86-2.89h-13.72c-1.86 0-2.87 1.02-2.87 2.85v5.03c0 1.86 1.01 2.88 2.87 2.88m11.96-4.36c-.93 0-1.68-.76-1.68-1.68a1.675 1.675 0 0 1 3.35 0c0 .92-.75 1.68-1.67 1.68m-21.34 2.76h4.88c-.13-.55-.14-1.55-.14-2.52h-4.74c-.7 0-1.26.58-1.26 1.26 0 .67.56 1.26 1.26 1.26" />
  </svg>
);
export default SvgTvandmediaboxBold;
