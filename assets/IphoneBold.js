import * as React from "react";
const SvgIphoneBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M3.692 27.091h10.15c2.13 0 3.55-1.42 3.55-3.55V3.561c0-2.13-1.42-3.56-3.55-3.56H3.692c-2.21 0-3.69 1.43-3.69 3.56v19.98c0 2.13 1.48 3.55 3.69 3.55m.66-3.2c-.84 0-1.33-.45-1.33-1.27V4.491c0-.82.49-1.28 1.33-1.28h8.69c.83 0 1.33.47 1.33 1.29v18.1c0 .82-.5 1.29-1.33 1.29Zm2.77-17.68h3.14c.59 0 1.04-.45 1.04-1.03 0-.59-.45-1.04-1.04-1.04h-3.14c-.58 0-1.03.45-1.03 1.04 0 .58.44 1.03 1.03 1.03m-1.03 16.66h5.21c.38 0 .66-.25.66-.66 0-.4-.28-.67-.66-.67h-5.21c-.37 0-.67.27-.67.67 0 .41.3.66.67.66" />
  </svg>
);
export default SvgIphoneBold;
