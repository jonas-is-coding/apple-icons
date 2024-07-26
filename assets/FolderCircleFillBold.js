import * as React from "react";
const SvgFoldercirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.754c6.83 0 12.38-5.55 12.38-12.38S19.202.004 12.372.004.002 5.544.002 12.374s5.54 12.38 12.37 12.38m-6.56-14.47v-1.66c0-1.23.69-1.92 1.84-1.92h1.64c.63 0 .91.13 1.35.43l.3.23c.35.25.6.37 1.03.37h5.02c1.28 0 1.96.69 1.96 1.95v.6Zm1.97 7.52c-1.28 0-1.97-.69-1.97-1.94v-4.52h13.14v4.52c0 1.25-.68 1.94-1.85 1.94Z" />
  </svg>
);
export default SvgFoldercirclefillBold;
