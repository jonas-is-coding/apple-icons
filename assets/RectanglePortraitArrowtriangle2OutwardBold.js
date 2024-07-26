import * as React from "react";
const SvgRectangleportraitarrowtriangle2OutwardBold = ({
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
    <path d="M12.352 24.151h8.22c2.66 0 4.11-1.45 4.11-4.14V4.141c0-2.68-1.45-4.14-4.11-4.14h-8.22c-2.66 0-4.11 1.46-4.11 4.14v15.87c0 2.69 1.45 4.14 4.11 4.14m.38-3.02c-1.01 0-1.47-.51-1.47-1.44V4.481c0-.95.46-1.46 1.47-1.46h7.47c1 0 1.46.51 1.46 1.46v15.21c0 .93-.46 1.44-1.46 1.44Zm13.88-6.37c0 .84.74 1.19 1.44.78l4.36-2.63c.68-.4.67-1.27 0-1.66l-4.36-2.64c-.7-.42-1.44-.04-1.44.78Zm-20.31 0v-5.37c0-.82-.72-1.2-1.44-.78l-4.36 2.64c-.66.39-.68 1.26 0 1.66l4.36 2.63c.71.41 1.44.06 1.44-.78" />
  </svg>
);
export default SvgRectangleportraitarrowtriangle2OutwardBold;
