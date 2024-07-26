import * as React from "react";
const SvgLightcylindricalceilingBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.482 26.3c7.51 0 12.47-2.64 12.47-6.74V7.21c0-4.37-4.98-7.21-12.47-7.21C4.982 0 .002 2.84.002 7.21v12.35c0 4.1 4.96 6.74 12.48 6.74M2.742 7.21c0-2.59 3.95-4.46 9.74-4.46 5.78 0 9.73 1.87 9.73 4.46v7.84c-2.18-1.42-5.57-2.23-9.73-2.23-4.17 0-7.55.81-9.74 2.23Zm9.74 16.33c-5.73 0-9.74-1.72-9.74-3.98 0-2.27 4.01-4 9.74-4 5.72 0 9.73 1.73 9.73 4 0 2.26-4.01 3.98-9.73 3.98m0-3.28c2.55 0 4.66-1.3 4.96-2.97-1.4-.36-3.11-.56-4.96-.56s-3.58.2-4.97.56c.29 1.67 2.4 2.97 4.97 2.97" />
  </svg>
);
export default SvgLightcylindricalceilingBold;
