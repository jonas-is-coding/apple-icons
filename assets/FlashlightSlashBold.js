import * as React from "react";
const SvgFlashlightslashBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M3.576 2.852h11.99v-.31c0-1.69-.86-2.54-2.5-2.54h-7c-1.64 0-2.49.85-2.49 2.54Zm9.58 11.75v-2.6c0-1.27.29-2.1.74-2.79l.67-1.04c.59-.92 1-1.74 1-2.84v-.84H3.576v.51l5.94 5.94c1.04-.13 2.09.64 2.18 1.76l.01.45ZM.286 6.742l17.19 17.16c.38.39 1 .39 1.39 0 .38-.38.38-1 0-1.38L1.686 5.342c-.37-.37-1.02-.39-1.4 0-.38.38-.38 1.02 0 1.4m8.18 21.5h2.21c1.62 0 2.48-.87 2.48-2.55v-3.86l-2.97-2.98c-.17.12-.38.2-.61.2-1.24 0-2.2-.96-2.2-2.18v-.83l-1.41-1.41v11.06c0 1.68.87 2.55 2.5 2.55" />
  </svg>
);
export default SvgFlashlightslashBold;
