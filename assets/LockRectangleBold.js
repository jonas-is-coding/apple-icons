import * as React from "react";
const SvgLockrectangleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.402h19.69c2.69 0 4.14-1.45 4.14-4.11V4.112c0-2.66-1.45-4.11-4.14-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.18c0 2.66 1.46 4.11 4.14 4.11m.32-3.02c-.93 0-1.44-.46-1.44-1.45V4.472c0-.99.51-1.45 1.44-1.45h19.05c.93 0 1.44.46 1.44 1.45v13.46c0 .99-.51 1.45-1.44 1.45Zm5.39-3.76c0 .91.41 1.35 1.27 1.35h5.75c.85 0 1.27-.44 1.27-1.35v-4.4c0-.77-.31-1.18-.92-1.27v-1.22c0-2.16-1.3-3.61-3.23-3.61-1.92 0-3.22 1.45-3.22 3.61v1.21c-.61.1-.92.51-.92 1.28Zm2.55-5.72v-1.28c0-1.15.62-1.91 1.59-1.91.98 0 1.61.75 1.61 1.91v1.28Z" />
  </svg>
);
export default SvgLockrectangleBold;
