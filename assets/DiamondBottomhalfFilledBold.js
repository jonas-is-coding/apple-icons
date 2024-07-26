import * as React from "react";
const SvgDiamondbottomhalffilledBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M1.43 10.865c-1.9 1.9-1.91 3.95-.02 5.84l9.47 9.46c1.88 1.89 3.94 1.88 5.84-.01l9.44-9.43c1.88-1.9 1.9-3.96.01-5.85l-9.47-9.47c-1.89-1.88-3.94-1.87-5.84.03Zm22.86 2.93h-21c0-.34.18-.68.52-1.03l8.95-8.97c.68-.67 1.35-.69 2.05.01l8.96 8.96c.35.34.52.69.52 1.03" />
  </svg>
);
export default SvgDiamondbottomhalffilledBold;
