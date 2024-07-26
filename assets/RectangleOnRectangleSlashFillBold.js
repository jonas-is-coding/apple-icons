import * as React from "react";
const SvgRectangleonrectangleslashfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M28.212 28.519c.38.39 1.01.39 1.39 0 .37-.38.39-1.01 0-1.39L2.752.289c-.37-.39-1.01-.39-1.4 0-.37.38-.37 1.02 0 1.4Zm-21.81-26.8 3.95 3.94c.16 0 .36-.01.54-.01h13.27v-.1c-.1-2.48-1.54-3.83-4.12-3.83Zm-6.4 15.4c0 2.6 1.39 4.04 3.98 4.1h.27v-9.55c0-1.52.39-2.8 1.13-3.75l-4.62-4.64c-.5.62-.76 1.48-.76 2.55Zm12.22-9.56 17.64 17.62c.36-.58.55-1.33.55-2.24v-11.27c0-2.66-1.47-4.11-4.14-4.11Zm-6.06 15.38c0 2.66 1.46 4.12 4.14 4.12h14.21L6.772 9.299c-.41.6-.61 1.39-.61 2.37Z" />
  </svg>
);
export default SvgRectangleonrectangleslashfillBold;
