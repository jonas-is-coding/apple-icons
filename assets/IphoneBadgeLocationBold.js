import * as React from "react";
const SvgIphonebadgelocationBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M3.692 27.091h3.22c-.99-.63-1.42-1.94-.93-3.02h-1.63c-.84 0-1.33-.46-1.33-1.28V4.311c0-.82.49-1.28 1.33-1.28h8.69c.83 0 1.33.47 1.33 1.28v14.87l2.22-1.02c.27-.11.53-.2.8-.24V3.561c0-2.13-1.42-3.56-3.55-3.56H3.692c-2.21 0-3.69 1.43-3.69 3.56v19.98c0 2.13 1.48 3.55 3.69 3.55m3.43-21h3.14c.59 0 1.04-.43 1.04-1.03 0-.58-.45-1.03-1.04-1.03h-3.14c-.58 0-1.03.45-1.03 1.03 0 .6.44 1.03 1.03 1.03m1.42 19.74h4.13c.24 0 .39.16.39.4l.02 4.1c0 1.1 1.31 1.47 1.82.33l4.39-9.56c.49-1.04-.48-2.01-1.54-1.53l-9.54 4.42c-1.13.52-.76 1.84.33 1.84" />
  </svg>
);
export default SvgIphonebadgelocationBold;
