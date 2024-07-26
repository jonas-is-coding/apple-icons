import * as React from "react";
const SvgRectangleportraitonrectangleportraitslashfillBold = ({
  title,
  titleId,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M8.069 5.26c.95-.65 2.18-1.01 3.61-1.01h9.56v-.27c-.06-2.59-1.5-3.98-4.11-3.98H5.849c-.98 0-1.79.21-2.41.63Zm19.06 24.07c.39.39 1.02.39 1.4 0a1 1 0 0 0 0-1.39L1.679 1.1a.996.996 0 0 0-1.41 0c-.36.38-.36 1.02 0 1.4Zm-.06-5.07V10.29c0-2.67-1.45-4.14-4.11-4.14h-11.28c-.89 0-1.63.18-2.22.51ZM1.739 6.19v13.85c0 2.58 1.35 4.02 3.82 4.12h.1v-13.4c0-.21.02-.42.02-.64Zm5.82 5.82v14.25c0 2.67 1.47 4.14 4.12 4.14h11.28c.99 0 1.79-.21 2.38-.62Z" />
  </svg>
);
export default SvgRectangleportraitonrectangleportraitslashfillBold;
