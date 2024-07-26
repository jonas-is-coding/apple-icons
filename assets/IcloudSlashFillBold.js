import * as React from "react";
const SvgIcloudslashfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M25.872 21.2c2.83-.76 4.83-3.15 4.83-6.02 0-2.55-1.42-4.88-3.8-5.86-.01-5.42-3.92-9.32-9.02-9.32-3.03 0-5.48 1.48-7.07 3.72-.79-.19-1.61-.17-2.39.03Zm-2.07 2.96c.39.39 1.03.39 1.39 0 .39-.37.39-1 0-1.39L5.172 2.75c-.4-.39-1.04-.37-1.41 0-.38.37-.36 1.04 0 1.4Zm-16.27-2.61h11.43L4.662 7.28c-.14.41-.23.84-.26 1.31-2.73.56-4.4 3.05-4.4 6.08 0 3.76 3.29 6.88 7.53 6.88" />
  </svg>
);
export default SvgIcloudslashfillBold;
