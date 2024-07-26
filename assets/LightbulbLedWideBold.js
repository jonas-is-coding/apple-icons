import * as React from "react";
const SvgLightbulbledwideBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 5.176c0 4.4 6.29 7.47 6.29 13.95v1.37c0 .62.36.98 1 .98h5.67c.63 0 1.01-.36 1.01-.98v-1.37c0-6.51 6.28-9.47 6.28-13.95 0-3.32-3.72-5.18-10.13-5.18S.002 1.856.002 5.176m2.54 0c0-1.46 2.8-2.63 7.58-2.63s7.59 1.17 7.59 2.63c0 .16-.03.32-.06.5H2.612c-.05-.18-.07-.34-.07-.5m6.28 13.33c0-4.36-3.18-7.97-5.02-10.62h12.65c-1.83 2.64-5.03 6.26-5.03 10.61v.78h-2.6Zm-1.52 6.03h5.65c.49 0 .88-.41.88-.86a.88.88 0 0 0-.88-.87h-5.65c-.49 0-.87.4-.87.87 0 .45.38.86.87.86m2.82 3.6c1.68 0 2.9-.9 3.1-2.28h-6.18c.18 1.38 1.4 2.28 3.08 2.28" />
  </svg>
);
export default SvgLightbulbledwideBold;
