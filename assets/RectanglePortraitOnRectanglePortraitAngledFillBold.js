import * as React from "react";
const SvgRectangleportraitonrectangleportraitangledfillBold = ({
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
    <path d="M11.455 4.664h8.06l-.21-1.2c-.46-2.65-2.16-3.82-4.77-3.37l-11.1 1.96c-2.62.46-3.79 2.14-3.34 4.78l2.78 15.73c.32 1.79 1.21 2.9 2.57 3.29v-15.14c0-3.74 2.29-6.05 6.01-6.05m15.38 6.05c0-2.68-1.45-4.15-4.11-4.15h-11.27c-2.66 0-4.12 1.47-4.12 4.15v15.96c0 2.67 1.47 4.15 4.12 4.15h11.27c2.66 0 4.11-1.48 4.11-4.15Z" />
  </svg>
);
export default SvgRectangleportraitonrectangleportraitangledfillBold;
