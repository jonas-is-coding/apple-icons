import * as React from "react";
const SvgAirplayvideocircleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-3.08a9.29 9.29 0 0 1-9.29-9.29c0-5.15 4.16-9.29 9.29-9.29 5.15 0 9.3 4.14 9.3 9.29 0 5.13-4.15 9.29-9.3 9.29m4.73-14.08h-9.47c-.98 0-1.63.65-1.63 1.61v5.51c0 .97.64 1.61 1.63 1.61h.66l1.4-1.6h-1.62c-.24 0-.42-.16-.42-.41v-4.71c0-.24.18-.42.42-.42h8.59c.25 0 .42.18.42.42v4.71c0 .25-.17.41-.42.41h-1.63l1.41 1.6h.66c.98 0 1.64-.64 1.64-1.61v-5.51c0-.96-.67-1.61-1.64-1.61m-1.52 10.4c.41 0 .6-.45.33-.76l-3.17-3.6a.497.497 0 0 0-.74 0l-3.19 3.6c-.27.31-.08.76.33.76Z" />
  </svg>
);
export default SvgAirplayvideocircleBold;
