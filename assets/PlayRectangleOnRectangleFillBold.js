import * as React from "react";
const SvgPlayrectangleonrectanglefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M10.302 3.929h13.93v-.1c-.1-2.48-1.54-3.83-4.12-3.83H4.142c-2.68 0-4.14 1.45-4.14 4.11v11.29c0 2.6 1.39 4.04 3.98 4.1h.27v-9.55c0-3.71 2.32-6.02 6.05-6.02m0 21.41h15.97c2.67 0 4.14-1.46 4.14-4.12V9.949c0-2.66-1.47-4.11-4.14-4.11h-15.97c-2.68 0-4.14 1.45-4.14 4.11v11.27c0 2.66 1.46 4.12 4.14 4.12m4.53-5.62v-8.25c0-.58.63-.86 1.13-.56l6.96 4.08c.48.27.49.94.01 1.22l-6.97 4.05c-.5.3-1.13.03-1.13-.54" />
  </svg>
);
export default SvgPlayrectangleonrectanglefillBold;
