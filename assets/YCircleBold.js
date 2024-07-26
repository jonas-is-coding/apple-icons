import * as React from "react";
const SvgYcircleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-3.08a9.29 9.29 0 0 1-9.29-9.29c0-5.15 4.16-9.29 9.29-9.29 5.15 0 9.3 4.14 9.3 9.29 0 5.13-4.15 9.29-9.3 9.29m0-3.92c.95 0 1.5-.64 1.5-1.68v-1.94l2.94-5.13c.16-.27.23-.52.23-.79 0-.74-.57-1.29-1.35-1.29-.67 0-1.01.26-1.36 1.02l-1.91 3.58h-.09l-1.9-3.58c-.35-.78-.69-1.02-1.37-1.02-.79 0-1.36.55-1.36 1.28 0 .28.07.52.22.8l2.95 5.14v1.93c0 1.04.54 1.68 1.5 1.68" />
  </svg>
);
export default SvgYcircleBold;
