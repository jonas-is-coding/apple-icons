import * as React from "react";
const SvgDiamondrighthalffilledBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M26.15 16.724c1.89-1.9 1.91-3.96.02-5.85l-9.47-9.46c-1.89-1.89-3.94-1.88-5.84.02l-9.43 9.43c-1.9 1.9-1.91 3.96-.02 5.84l9.47 9.46c1.88 1.89 3.93 1.88 5.83-.01ZM13.81 3.294v21c-.36 0-.68-.16-1.05-.53l-8.95-8.94c-.72-.71-.68-1.38 0-2.05l8.95-8.97c.35-.35.69-.52 1.05-.51" />
  </svg>
);
export default SvgDiamondrighthalffilledBold;
