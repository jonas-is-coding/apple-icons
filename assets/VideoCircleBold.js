import * as React from "react";
const SvgVideocircleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-3.08a9.29 9.29 0 0 1-9.29-9.29c0-5.15 4.16-9.29 9.29-9.29 5.15 0 9.3 4.14 9.3 9.29 0 5.13-4.15 9.29-9.3 9.29m-4.43-4.83h5.49c1.24 0 1.93-.68 1.93-1.86v-5.17c0-1.18-.67-1.86-1.9-1.86h-5.52c-1.2 0-1.92.68-1.92 1.86v5.23c0 1.19.69 1.8 1.92 1.8m8.08-2.66 1.79 1.53c.27.21.52.36.79.36.45 0 .77-.32.77-.82v-5.66c0-.5-.32-.82-.77-.82-.27 0-.52.15-.79.37l-1.79 1.52Z" />
  </svg>
);
export default SvgVideocircleBold;
