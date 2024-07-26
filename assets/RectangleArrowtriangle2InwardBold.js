import * as React from "react";
const SvgRectanglearrowtriangle2InwardBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M9.022-.004c-.83 0-1.19.74-.77 1.43l2.62 4.38c.4.66 1.27.65 1.67 0l2.62-4.38c.44-.7.05-1.43-.77-1.43Zm-4.88 24.29h15.14c2.68 0 4.13-1.46 4.13-4.12v-8.21c0-2.65-1.45-4.12-4.13-4.12H4.142c-2.68 0-4.14 1.46-4.14 4.12v8.21c0 2.66 1.46 4.12 4.14 4.12m.32-3.03c-.93 0-1.44-.45-1.44-1.45v-7.48c0-.99.51-1.46 1.44-1.46h14.49c.94 0 1.44.47 1.44 1.46v7.48c0 1-.5 1.45-1.44 1.45Zm4.56 10.95h5.37c.82 0 1.21-.73.77-1.44l-2.62-4.36c-.4-.67-1.27-.68-1.67 0l-2.62 4.36c-.42.7-.06 1.44.77 1.44" />
  </svg>
);
export default SvgRectanglearrowtriangle2InwardBold;
