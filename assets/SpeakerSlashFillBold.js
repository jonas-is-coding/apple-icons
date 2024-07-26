import * as React from "react";
const SvgSpeakerslashfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M21.542 22.921a.99.99 0 0 0 1.39 0 .993.993 0 0 0 0-1.4L1.692.291a.99.99 0 1 0-1.41 1.39Zm-4.17-9.18v-11.4c0-1.04-.79-1.88-1.86-1.88-.66 0-1.19.29-1.91.95l-4.25 3.95c-.04.04-.08.06-.14.07h-.18Zm-12.03 2.77h3.25a.3.3 0 0 1 .22.08l4.79 4.45c.67.64 1.22.92 1.93.92.77 0 1.39-.41 1.68-1.14L3.122 6.751c-.49.5-.74 1.27-.74 2.27v4.39c0 2.04 1.02 3.1 2.96 3.1" />
  </svg>
);
export default SvgSpeakerslashfillBold;
