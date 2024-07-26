import * as React from "react";
const SvgParkingsigncircleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-3.08a9.29 9.29 0 0 1-9.29-9.29c0-5.15 4.16-9.29 9.29-9.29 5.15 0 9.3 4.14 9.3 9.29 0 5.13-4.15 9.29-9.3 9.29m-2.58-3.92c.92 0 1.45-.61 1.45-1.6v-1.47h1.77c2.4 0 3.97-1.49 3.97-3.79s-1.56-3.8-3.95-3.8h-3.12c-1.02 0-1.55.6-1.55 1.63v7.43c0 .99.52 1.6 1.43 1.6m1.45-5.16v-3.41h1.38c1.05 0 1.65.62 1.65 1.71 0 1.08-.6 1.7-1.65 1.7Z" />
  </svg>
);
export default SvgParkingsigncircleBold;
