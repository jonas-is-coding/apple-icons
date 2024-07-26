import * as React from "react";
const SvgRectangleportraitonrectangleportraitBold = ({
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
    <path d="M19.502 4.14c0-2.69-1.45-4.14-4.11-4.14H4.112C1.452 0 .002 1.45.002 4.14v15.97c0 2.67 1.45 4.14 4.11 4.14h1.71v2.01c0 2.67 1.47 4.14 4.12 4.14h11.28c2.65 0 4.11-1.47 4.11-4.14V10.29c0-2.67-1.45-4.14-4.11-4.14h-1.72ZM4.472 21.22c-.99 0-1.45-.51-1.45-1.45V4.46c0-.94.46-1.44 1.45-1.44h10.55c1 0 1.45.5 1.45 1.44v1.69h-6.53c-2.66 0-4.12 1.47-4.12 4.14v10.93Zm17.83-10.59v15.3c0 .94-.46 1.44-1.45 1.44h-10.54c-1 0-1.46-.5-1.46-1.44v-15.3c0-.95.46-1.45 1.46-1.45h10.54c.99 0 1.45.5 1.45 1.45" />
  </svg>
);
export default SvgRectangleportraitonrectangleportraitBold;
