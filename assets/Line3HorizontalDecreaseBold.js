import * as React from "react";
const SvgLine3HorizontaldecreaseBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M1.372 2.82h21.82c.76 0 1.37-.65 1.37-1.4 0-.79-.6-1.42-1.37-1.42H1.372C.612 0 .002.66.002 1.42c0 .74.61 1.4 1.37 1.4m2.35 6.09h17.14c.77 0 1.38-.66 1.38-1.41 0-.77-.61-1.41-1.38-1.41H3.722c-.76 0-1.37.65-1.37 1.41 0 .74.61 1.41 1.37 1.41m2.34 6.08h12.48c.77 0 1.37-.65 1.37-1.41 0-.77-.6-1.41-1.37-1.41H6.062c-.78 0-1.37.65-1.37 1.41 0 .74.61 1.41 1.37 1.41" />
  </svg>
);
export default SvgLine3HorizontaldecreaseBold;
