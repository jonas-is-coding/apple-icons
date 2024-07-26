import * as React from "react";
const SvgRectangleportraitandarrowforwardBold = ({
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
    <path d="M4.112 25.792h12.55c2.66 0 4.12-1.45 4.12-4.14v-5.18h-3.03v4.86c0 .93-.45 1.44-1.45 1.44H4.472c-.99 0-1.45-.51-1.45-1.44V4.472c0-.94.46-1.45 1.45-1.45h11.83c1 0 1.45.51 1.45 1.45v4.83h3.03v-5.16c0-2.68-1.46-4.14-4.12-4.14H4.112c-2.66 0-4.11 1.46-4.11 4.14v17.51c0 2.69 1.45 4.14 4.11 4.14m6.75-12.9c0 .75.62 1.35 1.34 1.35h11.49l1.71-.11-.83.54-1.53 1.43c-.25.23-.39.55-.39.89 0 .61.47 1.17 1.14 1.17.34 0 .58-.13.82-.36l3.69-3.84c.35-.36.47-.71.47-1.07s-.12-.72-.47-1.08l-3.69-3.83c-.24-.24-.48-.36-.82-.36-.67 0-1.14.55-1.14 1.16 0 .34.14.66.39.89l1.53 1.43.83.55-1.71-.12h-11.49c-.72 0-1.34.6-1.34 1.36" />
  </svg>
);
export default SvgRectangleportraitandarrowforwardBold;
