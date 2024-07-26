import * as React from "react";
const SvgInsetfilledtrailingthirdrectangleportraitBold = ({
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
    <path d="M.002 21.652c0 2.69 1.45 4.14 4.11 4.14h12.55c2.66 0 4.12-1.45 4.12-4.14V4.142c0-2.68-1.46-4.14-4.12-4.14H4.112c-2.66 0-4.11 1.46-4.11 4.14Zm3.02-.32V4.472c0-.94.46-1.45 1.45-1.45h11.83c1 0 1.45.51 1.45 1.45v16.86c0 .93-.45 1.44-1.45 1.44H4.472c-.99 0-1.45-.51-1.45-1.44m9.94-.46h2.14c.53 0 .75-.22.75-.75V5.672c0-.53-.22-.74-.75-.74h-2.14c-.53 0-.75.21-.75.74v14.45c0 .53.22.75.75.75" />
  </svg>
);
export default SvgInsetfilledtrailingthirdrectangleportraitBold;
