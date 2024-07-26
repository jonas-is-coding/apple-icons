import * as React from "react";
const SvgLanyardcardBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M.002 21.652c0 2.69 1.45 4.14 4.11 4.14h11.06c2.65 0 4.11-1.45 4.11-4.14V4.142c0-2.68-1.46-4.14-4.11-4.14H4.112c-2.66 0-4.11 1.46-4.11 4.14Zm3.02-.32V4.472c0-.94.46-1.45 1.45-1.45h10.33c1 0 1.45.51 1.45 1.45v16.86c0 .93-.45 1.44-1.45 1.44H4.472c-.99 0-1.45-.51-1.45-1.44m3.95-15.57h5.34c.46 0 .84-.38.84-.84 0-.45-.38-.83-.84-.83h-5.34a.834.834 0 0 0 0 1.67" />
  </svg>
);
export default SvgLanyardcardBold;
