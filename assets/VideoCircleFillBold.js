import * as React from "react";
const SvgVideocirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.754c6.83 0 12.38-5.55 12.38-12.38S19.202.004 12.372.004.002 5.544.002 12.374s5.54 12.38 12.37 12.38m-4.64-7.68c-1.29 0-2.03-.64-2.03-1.9v-5.49c0-1.26.77-1.97 2.03-1.97h5.8c1.32 0 2 .71 2 1.97v5.42c0 1.24-.73 1.97-2.03 1.97Zm8.5-2.79v-3.73l1.87-1.59c.27-.23.55-.39.82-.39.5 0 .84.33.84.86v5.96c0 .54-.34.87-.84.87-.27 0-.54-.15-.82-.39Z" />
  </svg>
);
export default SvgVideocirclefillBold;
