import * as React from "react";
const SvgArrowshapeleftcircleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-3.08a9.29 9.29 0 0 1-9.29-9.29c0-5.15 4.16-9.29 9.29-9.29 5.15 0 9.3 4.14 9.3 9.29 0 5.13-4.15 9.29-9.3 9.29m-6.98-9.29c0 .26.12.56.35.8l4.84 4.5c.35.32.64.48 1.02.48.55 0 .97-.43.97-.98v-2.06h4.57c1.02 0 1.62-.58 1.62-1.6v-2.23c0-1.02-.6-1.62-1.62-1.62h-4.57v-2.06c0-.55-.42-1-.99-1-.34 0-.61.14-1 .51l-4.84 4.47c-.25.24-.35.53-.35.79" />
  </svg>
);
export default SvgArrowshapeleftcircleBold;
