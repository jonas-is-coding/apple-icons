import * as React from "react";
const SvgRectanglefillonrectangleangledfillBold = ({
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
    <path d="M2.064 18.746c.34 1.96 1.36 3.09 2.97 3.35v-11.32c0-3.71 2.3-6.02 6.04-6.02h13.14l-.24-1.33c-.46-2.61-2.15-3.79-4.78-3.33l-15.73 2.77c-2.64.47-3.82 2.16-3.37 4.78Zm9.01 7.42h15.98c2.67 0 4.13-1.46 4.13-4.12v-11.27c0-2.66-1.46-4.11-4.13-4.11h-15.98c-2.68 0-4.13 1.45-4.13 4.11v11.27c0 2.66 1.45 4.12 4.13 4.12" />
  </svg>
);
export default SvgRectanglefillonrectangleangledfillBold;
