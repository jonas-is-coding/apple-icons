import * as React from "react";
const SvgArrowupleftcircleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-3.08a9.29 9.29 0 0 1-9.29-9.29c0-5.15 4.16-9.29 9.29-9.29 5.15 0 9.3 4.14 9.3 9.29 0 5.13-4.15 9.29-9.3 9.29m-3.63-5.97c.7 0 1.15-.5 1.15-1.28v-1.6l-.18-1.45 1.4 1.57 3.71 3.72c.29.28.62.41 1.01.41.73 0 1.3-.52 1.3-1.29 0-.35-.15-.71-.41-.95l-3.74-3.75-1.59-1.4 1.38.19h1.71c.78 0 1.28-.44 1.28-1.15 0-.7-.5-1.13-1.29-1.13h-5.34c-.95 0-1.54.51-1.54 1.51v5.32c0 .76.45 1.28 1.15 1.28" />
  </svg>
);
export default SvgArrowupleftcircleBold;
