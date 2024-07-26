import * as React from "react";
const SvgDrophalffullBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M8.692 24.866c5.22-.01 8.69-3.4 8.69-8.5 0-2.35-.93-4.87-1.95-7.01-1.22-2.65-2.99-5.5-4.66-8.07-.52-.81-1.17-1.29-2.08-1.29s-1.56.48-2.08 1.29c-1.7 2.63-3.51 5.52-4.74 8.22-.98 2.08-1.87 4.56-1.87 6.86 0 5.1 3.47 8.49 8.69 8.5m-4.59-10.34c-.26 0-.54.03-.84.08.27-1.22.77-2.48 1.32-3.65 1.12-2.51 2.59-4.71 4-6.81.07-.09.15-.13.22 0 1.39 2.06 2.85 4.26 3.96 6.73.67 1.43 1.28 2.98 1.49 4.45-.83.63-1.8 1.38-3.34 1.38-2.94 0-3.73-2.18-6.81-2.18" />
  </svg>
);
export default SvgDrophalffullBold;
