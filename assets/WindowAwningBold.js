import * as React from "react";
const SvgWindowawningBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M-.002 24.143c0 .84.69 1.52 1.54 1.52h23.26c.84 0 1.53-.68 1.53-1.52 0-.85-.69-1.53-1.53-1.53h-.43v-7.21c1.25-.24 1.87-1.22 1.64-2.78l-1.47-9.99c-.23-1.57-1.08-2.63-2.68-2.63H4.568c-1.6 0-2.46 1.06-2.68 2.63l-1.48 9.99c-.22 1.52.37 2.49 1.56 2.75v7.24h-.43c-.85 0-1.54.68-1.54 1.53m4.44-17.63.47-3.16c.03-.2.13-.32.32-.32h6.69l-.06 3.48Zm10.05-3.48h6.71c.19 0 .28.12.32.32l.47 3.16h-7.45Zm-10.89 9.04.47-3.18h7.73l-.04 3.53h-7.84c-.2 0-.36-.15-.32-.35m11-3.18h7.75l.47 3.18c.03.2-.12.35-.32.35h-7.85Zm-9.61 13.72v-7.17h16.34v7.17Z" />
  </svg>
);
export default SvgWindowawningBold;
