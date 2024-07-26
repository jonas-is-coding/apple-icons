import * as React from "react";
const SvgArrowuturnupcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.76c6.83 0 12.38-5.54 12.38-12.37S19.202 0 12.372 0 .002 5.56.002 12.39s5.54 12.37 12.37 12.37m-1.36-6.2c-2.93 0-4.86-1.97-4.86-4.92v-1.72c0-.74.45-1.22 1.13-1.22.65 0 1.08.49 1.08 1.22v1.72c0 1.59 1.06 2.67 2.65 2.67 1.53 0 2.56-1.06 2.56-2.68v-3.49l.07-.98-.42.63-1.14 1.3c-.19.21-.45.32-.72.32-.58 0-1.07-.48-1.07-1.04 0-.29.1-.56.3-.75l3.28-3.23c.24-.24.52-.34.8-.34.29 0 .57.13.8.34l3.27 3.23c.21.2.3.45.3.73 0 .56-.49 1.05-1.05 1.05-.27 0-.54-.11-.73-.31l-1.08-1.18-.56-.76.08.99v3.49c0 2.96-1.87 4.93-4.69 4.93" />
  </svg>
);
export default SvgArrowuturnupcirclefillBold;
