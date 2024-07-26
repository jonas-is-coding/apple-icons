import * as React from "react";
const SvgRectangleonrectanglebuttonangledtopverticalleftBold = ({
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
    <path d="M7.552 26.203h10.35c2.56 0 4.08-1.51 4.08-4.05V4.063c0-2.48-1.57-4.06-4.05-4.06h-3.65c-1.95 0-3.64.51-5.2 1.95l-7.41 6.81c-1.12 1.02-1.67 2.48-1.67 4.22v5.67c0 4.55 2.99 7.55 7.55 7.55m.03-3.02c-3.05 0-4.57-1.51-4.57-4.55v-5.61c0-1.07.2-1.56.75-2.07l7.38-6.77c.95-.87 1.82-1.16 3.18-1.16h3.27c.84 0 1.37.54 1.37 1.37v17.43c0 .96-.43 1.36-1.4 1.36Zm-2.11-5.91c0 .89.48 1.41 1.34 1.43h.04v-3.78c0-1.38.87-2.25 2.28-2.25h5.46v-.03c-.05-.79-.54-1.25-1.44-1.25h-6.24c-.94 0-1.44.5-1.44 1.44Zm3.66 3.55h6.22c.94 0 1.45-.5 1.45-1.44v-4.46c0-.93-.51-1.43-1.45-1.43h-6.22c-.95 0-1.46.5-1.46 1.43v4.46c0 .94.51 1.44 1.46 1.44" />
  </svg>
);
export default SvgRectangleonrectanglebuttonangledtopverticalleftBold;
