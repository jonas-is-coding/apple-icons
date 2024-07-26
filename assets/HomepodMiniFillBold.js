import * as React from "react";
const SvgHomepodminifillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.332 3.073c3.27 0 5.63-.59 5.63-1.54 0-.96-2.35-1.53-5.63-1.53-3.24 0-5.59.57-5.59 1.53 0 .95 2.36 1.54 5.59 1.54m0 19.58c4.43 0 6.42-.57 8.28-2.3 2.56-2.34 4.04-5.72 4.04-9.27 0-2.79-.91-5.53-2.78-7.84-.64-.83-1.35-.84-2.1-.35-1.81 1.27-4.06 1.9-7.44 1.9-3.4 0-5.65-.63-7.44-1.9-.75-.49-1.48-.48-2.11.35a12.35 12.35 0 0 0-2.78 7.84c0 3.55 1.49 6.93 4.04 9.27 1.86 1.73 3.86 2.3 8.29 2.3" />
  </svg>
);
export default SvgHomepodminifillBold;
