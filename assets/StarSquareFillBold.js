import * as React from "react";
const SvgStarsquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m3.87-5.1c-.76.58-1.58.02-1.27-.91l1.29-3.83-3.3-2.37c-.67-.48-.51-1.52.49-1.51l4.05.05 1.22-3.87c.29-.91 1.27-.91 1.56 0l1.24 3.87 4.04-.05c1.02-.01 1.14 1.04.48 1.51l-3.28 2.36 1.28 3.84c.31.96-.52 1.48-1.27.91l-3.27-2.37Z" />
  </svg>
);
export default SvgStarsquarefillBold;
