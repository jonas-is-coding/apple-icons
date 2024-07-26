import * as React from "react";
const SvgFacesmilinginverseBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m-3.62-13.54c-.76 0-1.4-.69-1.4-1.64 0-.98.64-1.67 1.4-1.67.78 0 1.44.69 1.44 1.67 0 .95-.66 1.64-1.44 1.64m7.22 0c-.76 0-1.42-.69-1.42-1.64 0-.98.66-1.67 1.42-1.67.77 0 1.44.69 1.44 1.67 0 .95-.68 1.64-1.44 1.64m-3.6 7.02c-2.62 0-4.37-1.73-4.37-2.57 0-.32.32-.47.62-.33.91.47 1.95 1.01 3.75 1.01s2.83-.56 3.75-1.01c.3-.13.61.01.61.33 0 .84-1.74 2.57-4.36 2.57" />
  </svg>
);
export default SvgFacesmilinginverseBold;
