import * as React from "react";
const SvgSlashcircleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-3.08a9.29 9.29 0 0 1-9.29-9.29c0-5.15 4.16-9.29 9.29-9.29 5.15 0 9.3 4.14 9.3 9.29 0 5.13-4.15 9.29-9.3 9.29m-3.88-4.1c.39 0 .71-.14 1-.43l7.59-7.67c.3-.29.45-.63.45-.98 0-.73-.6-1.29-1.3-1.29-.37 0-.69.14-.99.43l-7.59 7.66c-.29.29-.43.63-.43.98 0 .73.54 1.3 1.27 1.3" />
  </svg>
);
export default SvgSlashcircleBold;
