import * as React from "react";
const SvgInfocirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m-.01-16.11c-1.01 0-1.84-.83-1.84-1.83 0-1.03.83-1.84 1.84-1.84 1 0 1.82.81 1.82 1.84 0 1-.82 1.83-1.82 1.83m-2.2 10.42c-.65 0-1.15-.45-1.15-1.11 0-.63.5-1.12 1.15-1.12h1.36v-4.28h-1.13c-.64 0-1.15-.46-1.15-1.12 0-.61.51-1.1 1.15-1.1h2.39c.82 0 1.26.56 1.26 1.44v5.06h1.1c.64 0 1.15.49 1.15 1.12 0 .66-.51 1.11-1.15 1.11Z" />
  </svg>
);
export default SvgInfocirclefillBold;
