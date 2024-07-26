import * as React from "react";
const SvgTextformatsizesmallerBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M1.592 13.641c.83 0 1.33-.45 1.61-1.47l.6-1.87h4.52l.6 1.9c.27 1.03.76 1.44 1.65 1.44.91 0 1.57-.62 1.57-1.51 0-.37-.07-.68-.21-1.09l-3.39-9.18c-.47-1.29-1.24-1.86-2.52-1.86-1.19 0-1.97.58-2.42 1.86l-3.38 9.18c-.13.37-.22.78-.22 1.09 0 .94.61 1.51 1.59 1.51m2.86-5.71 1.47-4.88h.2l1.51 4.88Z" />
  </svg>
);
export default SvgTextformatsizesmallerBold;
