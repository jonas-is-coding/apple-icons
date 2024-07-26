import * as React from "react";
const SvgSpeakercircleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-3.08a9.29 9.29 0 0 1-9.29-9.29c0-5.15 4.16-9.29 9.29-9.29 5.15 0 9.3 4.14 9.3 9.29 0 5.13-4.15 9.29-9.3 9.29m1.97-3.99c.49 0 .87-.38.87-.88v-8.82c0-.49-.38-.89-.88-.89-.33 0-.59.13-.93.45l-2.35 2.21c-.04.04-.1.04-.13.04h-1.62c-.94 0-1.45.54-1.45 1.52v2.15c0 .98.51 1.52 1.45 1.52h1.62c.03 0 .08.01.12.04l2.36 2.22c.32.31.59.44.94.44" />
  </svg>
);
export default SvgSpeakercircleBold;
