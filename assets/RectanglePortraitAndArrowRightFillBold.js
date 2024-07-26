import * as React from "react";
const SvgRectangleportraitandarrowrightfillBold = ({
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
    <path d="M4.112 25.792h12.55c2.66 0 4.12-1.45 4.12-4.14v-7.41h-8.58a1.355 1.355 0 0 1 0-2.71h8.58v2.71h2.91l1.71-.11-.83.54-1.53 1.43c-.25.23-.39.55-.39.89 0 .61.47 1.17 1.14 1.17.34 0 .58-.13.82-.36l3.69-3.84c.35-.36.47-.71.47-1.07s-.12-.72-.47-1.08l-3.69-3.83c-.24-.24-.48-.36-.82-.36-.67 0-1.14.55-1.14 1.16 0 .34.14.66.39.89l1.53 1.43.83.55-1.71-.12h-2.91v-7.39c0-2.68-1.46-4.14-4.12-4.14H4.112c-2.66 0-4.11 1.46-4.11 4.14v17.51c0 2.69 1.45 4.14 4.11 4.14" />
  </svg>
);
export default SvgRectangleportraitandarrowrightfillBold;
