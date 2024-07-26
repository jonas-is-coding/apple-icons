import * as React from "react";
const SvgAppleterminalcircleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-3.08a9.29 9.29 0 0 1-9.29-9.29c0-5.15 4.16-9.29 9.29-9.29 5.15 0 9.3 4.14 9.3 9.29 0 5.13-4.15 9.29-9.3 9.29m-4.46-4.25h8.94c1.19 0 1.83-.63 1.83-1.82v-6.42c0-1.18-.64-1.82-1.83-1.82h-8.94c-1.2 0-1.84.64-1.84 1.82v6.42c0 1.19.64 1.82 1.84 1.82m.4-5.9 1.1-.66-1.12-.67c-.56-.34-.08-1.21.54-.81l1.53.95c.37.23.38.81 0 1.05l-1.53.96c-.62.39-1.1-.48-.52-.82m2.45.74c0-.27.21-.48.46-.48h2.04a.474.474 0 1 1 0 .95h-2.04c-.25 0-.46-.22-.46-.47" />
  </svg>
);
export default SvgAppleterminalcircleBold;
