import * as React from "react";
const SvgIphonegen1CirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.754c6.83 0 12.38-5.55 12.38-12.38S19.202.004 12.372.004.002 5.544.002 12.374s5.54 12.38 12.37 12.38m-4.71-6.74V6.754c0-1.18.85-2 2.08-2h5.27c1.23 0 2.09.82 2.09 2v11.26c0 1.17-.86 1.98-2.09 1.98h-5.27c-1.23 0-2.08-.81-2.08-1.98m3.26-11.83c0 .16.13.27.28.27h2.34c.18 0 .3-.11.3-.27 0-.18-.12-.29-.3-.29h-2.34c-.15 0-.28.11-.28.29m-1.73 11.08h6.37v-9.78h-6.37Zm3.19 1.87c.34 0 .61-.28.61-.62s-.27-.62-.61-.62-.62.28-.62.62.28.62.62.62" />
  </svg>
);
export default SvgIphonegen1CirclefillBold;
