import * as React from "react";
const SvgCircleandlinehorizontalfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M34.222 12.386c0 .8-.64 1.54-1.51 1.54h-3.32c.07-.51.09-1.02.09-1.55 0-.52-.02-1.03-.09-1.54H4.832c.75-6.1 5.96-10.84 12.28-10.84 6.31 0 11.53 4.74 12.28 10.84h3.32c.87 0 1.51.74 1.51 1.55m-34.22 0c0-.81.64-1.55 1.52-1.55h3.31c-.06.51-.1 1.02-.1 1.54 0 .53.04 1.04.1 1.55h24.56c-.76 6.1-5.98 10.82-12.28 10.82-6.31 0-11.52-4.72-12.28-10.82h-3.31c-.88 0-1.52-.74-1.52-1.54" />
  </svg>
);
export default SvgCircleandlinehorizontalfillBold;
