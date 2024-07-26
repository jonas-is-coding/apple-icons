import * as React from "react";
const SvgFlashlightofffillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 2.852h11.99v-.31c0-1.69-.86-2.54-2.5-2.54h-7c-1.64 0-2.49.85-2.49 2.54Zm4.89 25.39h2.21c1.62 0 2.48-.87 2.48-2.55v-13.69c0-1.27.29-2.1.74-2.79l.67-1.04c.59-.92 1-1.74 1-2.84v-.84H.002v.84c0 1.1.41 1.92.99 2.84l.67 1.04c.45.69.73 1.52.73 2.79v13.69c0 1.68.87 2.55 2.5 2.55m-1.08-15.2c0-1.22.95-2.18 2.19-2.18 1.22 0 2.18.96 2.18 2.18v3.83c0 1.22-.96 2.18-2.18 2.18-1.24 0-2.19-.96-2.19-2.18Zm2.19 5.24c.81 0 1.42-.6 1.42-1.41 0-.79-.64-1.42-1.42-1.42-.8 0-1.43.63-1.43 1.42 0 .81.62 1.41 1.43 1.41" />
  </svg>
);
export default SvgFlashlightofffillBold;
