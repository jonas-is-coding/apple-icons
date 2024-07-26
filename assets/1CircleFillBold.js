import * as React from "react";
const Svg1CirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m.82-6.61c-.92 0-1.53-.52-1.53-1.62v-6.91h-.11l-1.25.85c-.38.23-.54.27-.81.27-.59 0-1.02-.47-1.02-1.07 0-.48.21-.78.64-1.08l2-1.32c.7-.47 1.22-.65 1.9-.65 1.04 0 1.73.65 1.73 1.63v8.28c0 1.1-.61 1.62-1.55 1.62" />
  </svg>
);
export default Svg1CirclefillBold;
