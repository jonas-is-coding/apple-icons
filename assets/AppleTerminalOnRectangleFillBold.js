import * as React from "react";
const SvgAppleterminalonrectanglefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M10.302 3.929h13.93v-.1c-.1-2.48-1.54-3.83-4.12-3.83H4.142c-2.68 0-4.14 1.45-4.14 4.11v11.29c0 2.6 1.39 4.04 3.98 4.1h.27v-9.55c0-3.71 2.32-6.02 6.05-6.02m0 21.41h15.97c2.67 0 4.14-1.46 4.14-4.12V9.949c0-2.66-1.47-4.11-4.14-4.11h-15.97c-2.68 0-4.14 1.45-4.14 4.11v11.27c0 2.66 1.46 4.12 4.14 4.12m.62-11.11 2.09-1.27-2.1-1.26c-1.09-.66-.14-2.34 1.04-1.59l2.93 1.83c.73.46.75 1.57 0 2.04l-2.93 1.84c-1.18.75-2.13-.91-1.03-1.59m4.47 1.4c0-.5.41-.91.92-.91h3.89c.52 0 .92.41.92.91 0 .52-.4.94-.92.94h-3.89c-.51 0-.92-.42-.92-.94" />
  </svg>
);
export default SvgAppleterminalonrectanglefillBold;
