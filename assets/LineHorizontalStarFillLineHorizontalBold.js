import * as React from "react";
const SvgLinehorizontalstarfilllinehorizontalBold = ({
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
    <path d="M.002 1.514c0 .83.68 1.51 1.51 1.51h27.07c.83 0 1.51-.68 1.51-1.51s-.68-1.51-1.51-1.51H1.512c-.83 0-1.51.68-1.51 1.51m12.31 15.08 2.75-2.02 2.73 2.02c.61.44 1.35.06 1.05-.77l-1.06-3.21 2.77-2c.59-.43.42-1.24-.38-1.24l-3.44.01-1.03-3.21c-.23-.74-1.05-.74-1.3 0l-1.03 3.21-3.45-.01c-.78 0-.98.82-.38 1.24l2.79 2-1.08 3.21c-.28.8.44 1.21 1.06.77m-12.31 5.16c0 .82.68 1.51 1.51 1.51h27.07c.83 0 1.51-.69 1.51-1.51 0-.84-.68-1.52-1.51-1.52H1.512c-.83 0-1.51.68-1.51 1.52" />
  </svg>
);
export default SvgLinehorizontalstarfilllinehorizontalBold;
