import * as React from "react";
const SvgIphonegen2LandscapeBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M27.102 13.7V3.55c0-2.13-1.43-3.55-3.56-3.55H3.572C1.432 0 .002 1.42.002 3.55V13.7c0 2.21 1.43 3.69 3.56 3.69h19.98c2.13 0 3.56-1.48 3.56-3.69m-3.21-.66c0 .84-.45 1.33-1.27 1.33H4.492c-.82 0-1.28-.49-1.28-1.33v-1.59c0-.19.1-.29.29-.29h.35c.55 0 .93-.36.93-.91V7.14c0-.55-.38-.92-.93-.92h-.35c-.19 0-.29-.09-.29-.28V4.35c0-.83.48-1.33 1.29-1.33h18.12c.8 0 1.27.5 1.27 1.33Zm-13.42.32h6.16c.38 0 .67-.27.67-.68 0-.4-.29-.67-.67-.67h-6.16c-.38 0-.66.27-.66.67 0 .41.28.68.66.68" />
  </svg>
);
export default SvgIphonegen2LandscapeBold;
