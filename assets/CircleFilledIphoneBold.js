import * as React from "react";
const SvgCirclefillediphoneBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 23.541c0 2.13 1.48 3.55 3.69 3.55h10.15c2.13 0 3.55-1.42 3.55-3.55V3.561c0-2.13-1.42-3.56-3.55-3.56H3.692c-2.21 0-3.69 1.43-3.69 3.56Zm3.02-.92V4.491c0-.82.49-1.28 1.33-1.28h8.69c.83 0 1.33.47 1.33 1.29v18.1c0 .82-.5 1.29-1.33 1.29h-8.69c-.84 0-1.33-.45-1.33-1.27m5.67-4.61c2.46 0 4.47-2 4.47-4.46 0-2.47-2.01-4.47-4.47-4.47a4.466 4.466 0 0 0 0 8.93" />
  </svg>
);
export default SvgCirclefillediphoneBold;
