import * as React from "react";
const SvgBagcircleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-3.08a9.29 9.29 0 0 1-9.29-9.29c0-5.15 4.16-9.29 9.29-9.29 5.15 0 9.3 4.14 9.3 9.29 0 5.13-4.15 9.29-9.3 9.29m-3.29-3.6h6.69c1.2 0 1.9-.7 1.9-1.98v-5.89c0-1.28-.7-1.97-2-1.97h-.66c-.02-1.39-1.18-2.51-2.64-2.51-1.45 0-2.6 1.12-2.62 2.51h-.67c-1.29 0-2 .69-2 1.97v5.89c0 1.28.71 1.98 2 1.98m2.11-9.84c.02-.71.47-1.19 1.18-1.19.72 0 1.17.48 1.19 1.19Z" />
  </svg>
);
export default SvgBagcircleBold;
