import * as React from "react";
const SvgRectangleportraitonrectangleportraitangledBold = ({
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
    <path d="M26.835 10.714c0-2.68-1.45-4.15-4.11-4.15h-2.88l-.54-3.1c-.46-2.65-2.16-3.82-4.77-3.37l-11.1 1.96c-2.62.46-3.79 2.14-3.34 4.79l2.78 15.72c.44 2.54 2.03 3.74 4.46 3.41v.7c0 2.67 1.47 4.15 4.12 4.15h11.27c2.66 0 4.11-1.48 4.11-4.15Zm-21.04 10.99-2.66-15.07c-.16-.92.2-1.5 1.19-1.67l10.37-1.83c.99-.17 1.53.24 1.68 1.17l.41 2.26h-5.33c-2.66 0-4.12 1.47-4.12 4.15v12.19c-.89.13-1.39-.31-1.54-1.2m18.02-10.66v15.3c0 .94-.46 1.44-1.45 1.44h-10.54c-.99 0-1.46-.5-1.46-1.44v-15.3c0-.95.47-1.45 1.46-1.45h10.54c.99 0 1.45.5 1.45 1.45" />
  </svg>
);
export default SvgRectangleportraitonrectangleportraitangledBold;
