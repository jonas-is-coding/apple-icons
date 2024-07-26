import * as React from "react";
const SvgBookmarkcircleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-3.08a9.29 9.29 0 0 1-9.29-9.29c0-5.15 4.16-9.29 9.29-9.29 5.15 0 9.3 4.14 9.3 9.29 0 5.13-4.15 9.29-9.3 9.29m-3.18-3.17c.35 0 .58-.17 1.01-.6l2.13-2.11c.02-.04.07-.04.08 0l2.13 2.11c.43.43.67.6 1.01.6.54 0 .89-.39.89-.99v-9.4c0-1.17-.65-1.81-1.81-1.81h-4.53c-1.16 0-1.81.64-1.81 1.81v9.4c0 .6.37.99.9.99" />
  </svg>
);
export default SvgBookmarkcircleBold;
