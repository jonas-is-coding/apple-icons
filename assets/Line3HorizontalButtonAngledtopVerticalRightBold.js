import * as React from "react";
const SvgLine3HorizontalbuttonangledtopverticalrightBold = ({
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
    <path d="M14.452 26.203c4.54 0 7.53-3 7.53-7.55v-5.67c0-1.74-.55-3.2-1.67-4.22l-7.41-6.81c-1.56-1.44-3.25-1.95-5.2-1.95h-3.65c-2.49 0-4.05 1.58-4.05 4.06v18.09c0 2.54 1.52 4.05 4.06 4.05Zm-.05-3.02h-10c-.94 0-1.38-.4-1.38-1.36V4.393c0-.83.53-1.37 1.37-1.37h3.27c1.36 0 2.23.29 3.18 1.16l7.38 6.77c.55.51.75 1 .75 2.07v5.61c0 3.04-1.52 4.55-4.57 4.55m-7.78-9.16h8.5c.55 0 .94-.36.94-.89 0-.52-.39-.89-.94-.89h-8.5c-.56 0-.95.37-.95.89 0 .53.39.89.95.89m0 3.19h8.5c.55 0 .94-.35.94-.88 0-.54-.39-.89-.94-.89h-8.5c-.56 0-.95.35-.95.89 0 .53.39.88.95.88m0 3.21h8.5c.55 0 .94-.36.94-.89 0-.52-.39-.89-.94-.89h-8.5c-.56 0-.95.37-.95.89 0 .53.39.89.95.89" />
  </svg>
);
export default SvgLine3HorizontalbuttonangledtopverticalrightBold;
