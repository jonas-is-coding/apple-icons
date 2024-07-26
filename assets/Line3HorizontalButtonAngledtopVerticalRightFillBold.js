import * as React from "react";
const SvgLine3HorizontalbuttonangledtopverticalrightfillBold = ({
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
    <path d="M14.452 26.203c4.54 0 7.53-3 7.53-7.55v-5.67c0-1.74-.55-3.2-1.67-4.22l-7.41-6.81c-1.56-1.44-3.25-1.95-5.2-1.95h-3.65c-2.49 0-4.05 1.58-4.05 4.06v18.09c0 2.54 1.52 4.05 4.06 4.05Zm-8.04-12.29c-.61 0-1.02-.38-1.02-.95 0-.55.41-.94 1.02-.94h8.92c.59 0 1 .39 1 .94 0 .57-.41.95-1 .95Zm0 3.36c-.61 0-1.02-.37-1.02-.94 0-.56.41-.93 1.02-.93h8.92c.59 0 1 .37 1 .93 0 .57-.41.94-1 .94Zm0 3.38c-.61 0-1.02-.38-1.02-.94s.41-.95 1.02-.95h8.92c.59 0 1 .39 1 .95s-.41.94-1 .94Z" />
  </svg>
);
export default SvgLine3HorizontalbuttonangledtopverticalrightfillBold;
