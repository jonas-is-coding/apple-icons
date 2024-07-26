import * as React from "react";
const Svg4AltcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m-4.94-10.27c0-.45.14-.85.38-1.37 1.02-1.94 1.98-3.74 3.04-5.66.29-.54.64-.81 1.24-.81.75 0 1.28.52 1.28 1.18 0 .31-.07.52-.26.91-.76 1.53-1.7 3.32-2.52 4.9h2.39v-1.65c0-.77.48-1.29 1.26-1.29.79 0 1.3.51 1.3 1.29v1.65h.48c.82 0 1.3.45 1.3 1.15 0 .72-.49 1.17-1.3 1.17h-.48v.67c0 .92-.51 1.38-1.29 1.38s-1.27-.48-1.27-1.38v-.67h-4.04c-.91 0-1.51-.51-1.51-1.47" />
  </svg>
);
export default Svg4AltcirclefillBold;
