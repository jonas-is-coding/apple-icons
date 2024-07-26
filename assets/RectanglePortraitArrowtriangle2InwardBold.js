import * as React from "react";
const SvgRectangleportraitarrowtriangle2InwardBold = ({
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
    <path d="M11.952 24.151h8.22c2.64 0 4.11-1.45 4.11-4.14V4.141c0-2.68-1.45-4.14-4.11-4.14h-8.22c-2.66 0-4.11 1.46-4.11 4.14v15.87c0 2.69 1.45 4.14 4.11 4.14m.36-3.02c-.99 0-1.45-.51-1.45-1.44V4.481c0-.95.46-1.46 1.45-1.46h7.48c1 0 1.47.51 1.47 1.46v15.21c0 .93-.47 1.44-1.47 1.44Zm19.8-6.37v-5.37c0-.82-.73-1.2-1.43-.78l-4.37 2.64c-.66.39-.67 1.26 0 1.66l4.37 2.63c.69.41 1.43.06 1.43-.78m-32.11 0c0 .84.72 1.19 1.44.78l4.36-2.63c.67-.41.66-1.26 0-1.66l-4.37-2.64c-.71-.41-1.43-.04-1.43.78Z" />
  </svg>
);
export default SvgRectangleportraitarrowtriangle2InwardBold;
