import * as React from "react";
const SvgSquare2Layers3DfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.392 15.95c.55 0 1.07-.21 1.76-.62l9.02-5.22c1.06-.62 1.61-1.22 1.61-2.13 0-.93-.55-1.52-1.61-2.14L14.152.62c-.69-.41-1.21-.62-1.76-.62-.54 0-1.07.21-1.77.62l-9 5.22C.542 6.46.002 7.05.002 7.98c0 .91.54 1.51 1.62 2.13l9 5.22c.7.41 1.23.62 1.77.62m0 10.07c.55 0 1.07-.22 1.76-.63l9.02-5.21c1.06-.62 1.61-1.22 1.61-2.13 0-.93-.55-1.53-1.61-2.15l-3.24-1.86-4.88 2.82c-1.05.6-1.83.86-2.66.86s-1.61-.26-2.65-.86l-4.89-2.82-3.23 1.86c-1.08.62-1.62 1.22-1.62 2.15 0 .91.54 1.51 1.62 2.13l9 5.21c.7.41 1.23.63 1.77.63" />
  </svg>
);
export default SvgSquare2Layers3DfillBold;
