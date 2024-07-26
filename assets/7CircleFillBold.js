import * as React from "react";
const Svg7CirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m-1.32-6.62c-.86 0-1.47-.51-1.47-1.3 0-.35.1-.63.27-.91l3.88-6.53v-.12h-4.4c-.79 0-1.29-.45-1.29-1.18 0-.71.49-1.18 1.29-1.18h5.76c1.17 0 1.9.66 1.9 1.66 0 .49-.13.91-.47 1.5l-4.01 7.06c-.45.75-.82 1-1.46 1" />
  </svg>
);
export default Svg7CirclefillBold;
