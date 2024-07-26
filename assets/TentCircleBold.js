import * as React from "react";
const SvgTentcircleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-3.08a9.29 9.29 0 0 1-9.29-9.29c0-5.15 4.16-9.29 9.29-9.29 5.15 0 9.3 4.14 9.3 9.29 0 5.13-4.15 9.29-9.3 9.29m-5.15-4.12h10.31c.81 0 1.12-.75.78-1.43l-4.99-9.99c-.41-.83-1.47-.82-1.88-.01l-5.01 10c-.34.68-.02 1.43.79 1.43m2.26-1.2 2.42-5.25c.11-.21.3-.31.47-.31.19 0 .38.1.47.31l2.43 5.25h-1.98l-.92-3.96-.91 3.96Z" />
  </svg>
);
export default SvgTentcircleBold;
