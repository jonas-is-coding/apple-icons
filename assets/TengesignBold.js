import * as React from "react";
const SvgTengesignBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002.699c0 .4.3.7.7.7h15.56c.4 0 .71-.31.71-.7s-.31-.7-.71-.7H.702c-.4 0-.7.31-.7.7m8.49 20.81c1.27 0 2.06-.81 2.06-2.09V6.679h5.03c.85 0 1.39-.53 1.39-1.35 0-.83-.54-1.34-1.39-1.34H1.422c-.86 0-1.4.51-1.4 1.34 0 .82.54 1.35 1.4 1.35h5.05v12.74c0 1.28.78 2.09 2.02 2.09" />
  </svg>
);
export default SvgTengesignBold;
