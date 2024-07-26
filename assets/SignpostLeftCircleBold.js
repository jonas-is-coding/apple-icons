import * as React from "react";
const SvgSignpostleftcircleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-3.08a9.29 9.29 0 0 1-9.29-9.29c0-5.15 4.16-9.29 9.29-9.29 5.15 0 9.3 4.14 9.3 9.29 0 5.13-4.15 9.29-9.3 9.29m3.82-7.91c.85 0 1.34-.49 1.34-1.32v-2.99c0-.83-.49-1.31-1.34-1.31h-3.03v-1.12c0-.42-.34-.76-.78-.76-.41 0-.73.34-.73.76v1.12h-2.5c-.5 0-.79.14-1.12.47l-1.41 1.35c-.69.65-.68 1.32-.01 1.96l1.42 1.36c.33.33.62.48 1.12.48h2.5v3.21h-1.4c-.42 0-.75.34-.75.76 0 .41.33.75.75.75h4.28c.42 0 .77-.34.77-.75 0-.42-.35-.76-.77-.76h-1.37v-3.21Z" />
  </svg>
);
export default SvgSignpostleftcircleBold;
