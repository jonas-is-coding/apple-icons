import * as React from "react";
const SvgPenciltipBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M1.398 22.458c.85 0 1.26-.44 1.41-1.13l2.22-10.17h6.13l2.25 10.17c.16.69.56 1.13 1.41 1.13 1.15 0 1.58-.88 1.34-1.84l-2.34-10.43c-.21-.89-.91-1.6-1.76-1.71L9.328.887c-.2-.56-.62-.89-1.23-.89-.62 0-1.06.33-1.26.89l-2.73 7.59c-.84.11-1.53.82-1.73 1.69l-2.32 10.45c-.22.97.2 1.84 1.34 1.84" />
  </svg>
);
export default SvgPenciltipBold;
