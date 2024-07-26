import * as React from "react";
const SvgLockrectangleonrectanglefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M10.302 3.929h13.93v-.1c-.1-2.48-1.54-3.83-4.12-3.83H4.142c-2.68 0-4.14 1.45-4.14 4.11v11.29c0 2.6 1.39 4.04 3.98 4.1h.27v-9.55c0-3.71 2.32-6.02 6.05-6.02m0 21.41h15.97c2.67 0 4.14-1.46 4.14-4.12V9.949c0-2.66-1.47-4.11-4.14-4.11h-15.97c-2.68 0-4.14 1.45-4.14 4.11v11.27c0 2.66 1.46 4.12 4.14 4.12m3.63-5.08v-4.61c0-.82.32-1.26.95-1.36v-1.27c0-2.27 1.38-3.8 3.41-3.8s3.41 1.53 3.41 3.8v1.27c.62.1.95.54.95 1.36v4.61c0 .98-.43 1.42-1.32 1.42h-6.06c-.9 0-1.34-.44-1.34-1.42m2.69-6.02h3.35v-1.32c0-1.22-.67-2.01-1.69-2.01-1.01 0-1.66.79-1.66 2.01Z" />
  </svg>
);
export default SvgLockrectangleonrectanglefillBold;
