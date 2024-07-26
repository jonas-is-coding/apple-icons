import * as React from "react";
const SvgMirrorsideleftBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 10.476c0 5.17 3.21 8.15 8.53 8.15h18.18c1.82 0 3.24.12 4.65.49 1.7.44 2.93-.13 2.93-1.95v-5.49c0-1.21-.88-2.09-2.09-2.09h-2.61c-.76 0-1.19-.38-1.09-1.24l.31-3.06c.36-3.25-1.6-5.29-5.22-5.29-3.67.02-10.69.18-14.78.64-5.52.65-8.81 4.3-8.81 9.84m2.93 0c0-3.89 2.28-6.46 6.19-6.9 3.98-.45 10.82-.65 14.47-.65 1.85 0 2.47.58 2.31 2.02l-.95 8.48c-.2 1.74-.85 2.29-2.79 2.29H8.512c-3.47 0-5.58-1.89-5.58-5.24" />
  </svg>
);
export default SvgMirrorsideleftBold;
