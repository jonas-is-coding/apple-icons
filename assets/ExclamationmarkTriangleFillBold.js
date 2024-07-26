import * as React from "react";
const SvgExclamationmarktrianglefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M3.55 22.886h18.04c2.14 0 3.55-1.62 3.55-3.55 0-.6-.15-1.22-.48-1.79l-9.03-15.77c-.69-1.18-1.86-1.78-3.06-1.78s-2.39.61-3.07 1.78L.48 17.556a3.53 3.53 0 0 0-.48 1.78c0 1.93 1.41 3.55 3.55 3.55m9.04-8.38c-.84 0-1.32-.46-1.35-1.29l-.19-5.06c-.05-.89.59-1.49 1.52-1.49s1.58.61 1.53 1.49l-.19 5.05c-.05.84-.51 1.3-1.32 1.3m0 4.23c-.94 0-1.67-.58-1.67-1.49 0-.88.73-1.47 1.67-1.47.93 0 1.65.59 1.65 1.47 0 .91-.73 1.49-1.65 1.49" />
  </svg>
);
export default SvgExclamationmarktrianglefillBold;
