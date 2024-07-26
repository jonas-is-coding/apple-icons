import * as React from "react";
const SvgTextjustifyleftBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M1.352 2.752h22.44c.75 0 1.35-.64 1.35-1.38 0-.76-.59-1.37-1.35-1.37H1.352c-.77 0-1.35.63-1.35 1.37 0 .73.6 1.38 1.35 1.38m0 6.14h22.44c.75 0 1.35-.64 1.35-1.38 0-.75-.59-1.37-1.35-1.37H1.352c-.77 0-1.35.63-1.35 1.37 0 .73.6 1.38 1.35 1.38m0 6.15h22.44c.75 0 1.35-.64 1.35-1.38 0-.76-.59-1.37-1.35-1.37H1.352c-.77 0-1.35.63-1.35 1.37 0 .73.6 1.38 1.35 1.38m0 6.15h11.98c.75 0 1.35-.65 1.35-1.39 0-.75-.58-1.37-1.35-1.37H1.352c-.77 0-1.35.63-1.35 1.37 0 .73.6 1.39 1.35 1.39" />
  </svg>
);
export default SvgTextjustifyleftBold;
