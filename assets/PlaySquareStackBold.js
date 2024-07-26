import * as React from "react";
const SvgPlaysquarestackBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.622 1.785h11.98c-.09-1.15-.8-1.78-2.04-1.78h-7.91c-1.23 0-1.94.63-2.03 1.78m-1.97 3.69h15.92c-.15-1.21-.81-1.94-2.2-1.94H4.862c-1.4 0-2.06.73-2.21 1.94m1.49 23.25h13.35c2.49 0 3.95-1.47 3.95-4.12v-13.21c0-2.66-1.46-4.12-4.13-4.12H4.142c-2.68 0-4.14 1.46-4.14 4.12v13.21c0 2.66 1.46 4.12 4.14 4.12m.32-3.03c-.93 0-1.44-.46-1.44-1.46v-12.48c0-1 .51-1.45 1.44-1.45h12.52c.94 0 1.44.45 1.44 1.45v12.48c0 1-.5 1.46-1.25 1.46Zm4.43-3.05 6.23-3.67c.73-.44.72-1.47 0-1.89l-6.23-3.68c-.77-.46-1.68-.06-1.68.83v7.56c0 .9.9 1.31 1.68.85" />
  </svg>
);
export default SvgPlaysquarestackBold;
