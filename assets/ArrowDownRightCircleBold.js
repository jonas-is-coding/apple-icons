import * as React from "react";
const SvgArrowdownrightcircleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-3.08a9.29 9.29 0 0 1-9.29-9.29c0-5.15 4.16-9.29 9.29-9.29 5.15 0 9.3 4.14 9.3 9.29 0 5.13-4.15 9.29-9.3 9.29m3.62-12.71c-.7 0-1.13.5-1.13 1.27v1.6l.16 1.45-1.39-1.57-3.72-3.7c-.29-.3-.62-.42-.99-.42-.74 0-1.32.51-1.32 1.29 0 .35.17.7.41.94l3.75 3.75 1.59 1.4-1.39-.19h-1.71c-.77 0-1.26.45-1.26 1.15s.5 1.14 1.27 1.14h5.35c.96 0 1.53-.52 1.53-1.52v-5.32c0-.76-.44-1.27-1.15-1.27" />
  </svg>
);
export default SvgArrowdownrightcircleBold;
