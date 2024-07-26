import * as React from "react";
const SvgCloudfogcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.754c6.83 0 12.38-5.55 12.38-12.38S19.202.004 12.372.004.002 5.544.002 12.374s5.54 12.38 12.37 12.38m-3.61-10.93c-1.67 0-2.74-1.1-2.74-2.53 0-1.17.73-2.06 1.79-2.41.25-2.1 1.98-3.63 4.08-3.63 1.63 0 2.87.8 3.59 2.18 1.91 0 3.35 1.37 3.35 3.21 0 1.78-1.42 3.18-3.26 3.18Zm-.38 2.56c-.33 0-.6-.27-.6-.6s.27-.6.6-.6h7.99c.34 0 .6.27.6.6s-.26.6-.6.6Zm0 2.37a.595.595 0 1 1 0-1.19h7.99c.34 0 .6.26.6.59 0 .34-.26.6-.6.6Z" />
  </svg>
);
export default SvgCloudfogcirclefillBold;
