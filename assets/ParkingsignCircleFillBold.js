import * as React from "react";
const SvgParkingsigncirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m-2.7-6.71c-.98 0-1.53-.65-1.53-1.7v-7.79c0-1.1.56-1.74 1.65-1.74h3.29c2.52 0 4.16 1.58 4.16 4 0 2.44-1.66 4.01-4.2 4.01h-1.84v1.52c0 1.05-.56 1.7-1.53 1.7m1.53-5.44h1.43c1.11 0 1.73-.64 1.73-1.78 0-1.15-.62-1.78-1.73-1.78h-1.43Z" />
  </svg>
);
export default SvgParkingsigncirclefillBold;
