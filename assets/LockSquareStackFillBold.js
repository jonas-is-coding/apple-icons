import * as React from "react";
const SvgLocksquarestackfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M4.622 1.785h11.98c-.09-1.15-.8-1.78-2.04-1.78h-7.91c-1.23 0-1.94.63-2.03 1.78m-1.97 3.69h15.92c-.15-1.21-.81-1.94-2.2-1.94H4.862c-1.4 0-2.06.73-2.21 1.94m1.49 23.25h13.35c2.49 0 3.95-1.47 3.95-4.12v-13.21c0-2.66-1.46-4.12-4.13-4.12H4.142c-2.68 0-4.14 1.46-4.14 4.12v13.21c0 2.66 1.46 4.12 4.14 4.12m2.23-6.01v-4.63c0-.81.32-1.24.95-1.36v-1.27c0-2.27 1.39-3.79 3.41-3.79 2.03 0 3.41 1.52 3.41 3.79v1.28c.62.11.95.54.95 1.35v4.63c0 .97-.44 1.41-1.33 1.41h-6.06c-.89 0-1.33-.44-1.33-1.41m2.69-6.04h3.35v-1.32c0-1.21-.67-2.01-1.69-2.01-1.01 0-1.66.8-1.66 2.01Z" />
  </svg>
);
export default SvgLocksquarestackfillBold;
