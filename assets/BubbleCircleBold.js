import * as React from "react";
const SvgBubblecircleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-3.08a9.29 9.29 0 0 1-9.29-9.29c0-5.15 4.16-9.29 9.29-9.29 5.15 0 9.3 4.14 9.3 9.29 0 5.13-4.15 9.29-9.3 9.29m-2.74-2.75c.26 0 .45-.1.73-.35l2.04-1.82h3.51c1.64 0 2.62-1 2.62-2.62v-4.27c0-1.62-.98-2.63-2.62-2.63h-7.05c-1.64 0-2.63 1.01-2.63 2.63v4.27c0 1.62 1.05 2.62 2.55 2.62h.29v1.55c0 .38.21.62.56.62" />
  </svg>
);
export default SvgBubblecircleBold;
