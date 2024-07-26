import * as React from "react";
const SvgArrowtrianglerightBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M1.942 19.262c.54 0 1-.2 1.66-.52l14.45-7.02c1.11-.54 1.62-1.2 1.62-2.09s-.51-1.55-1.62-2.09L3.602.532c-.67-.32-1.12-.53-1.66-.53-1.07 0-1.94.82-1.94 2.18l.01 14.9c0 1.36.87 2.18 1.93 2.18m1.22-3.82c-.06 0-.09-.04-.09-.13V3.952c0-.08.03-.13.09-.13.05 0 .08.02.14.05l12.03 5.64c.06.04.1.07.1.12 0 .06-.04.09-.1.12l-12.03 5.65c-.06.02-.09.04-.14.04" />
  </svg>
);
export default SvgArrowtrianglerightBold;
