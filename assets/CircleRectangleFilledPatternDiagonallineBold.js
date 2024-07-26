import * as React from "react";
const SvgCirclerectanglefilledpatterndiagonallineBold = ({
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
    <path d="M4.142 22.402h19.69c2.69 0 4.14-1.45 4.14-4.11V4.112c0-2.66-1.45-4.11-4.14-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.18c0 2.66 1.46 4.11 4.14 4.11m-1.12-17.93c0-.99.51-1.45 1.44-1.45h3l-4.44 4.44Zm10.94.33c-3.53 0-6.39 2.87-6.39 6.4v.21l-4.55 4.55v-5.08l7.87-7.86h5.07l-1.79 1.79c-.07 0-.14-.01-.21-.01m9.55-1.78c.46 0 .83.12 1.07.36l-4.92 4.93a6.4 6.4 0 0 0-2.79-2.8l2.49-2.49Zm-9.55 14.58c3.53 0 6.39-2.86 6.39-6.4v-.2l4.6-4.59v5.07l-7.9 7.9h-5.08l1.79-1.78zm0-1.97a4.41 4.41 0 0 1-4.42-4.43 4.41 4.41 0 0 1 4.42-4.43c2.46 0 4.43 1.97 4.43 4.43s-1.97 4.43-4.43 4.43m-9.5 3.75c-.48 0-.85-.12-1.09-.37l4.89-4.89a6.45 6.45 0 0 0 2.8 2.79l-2.48 2.47Zm20.49-1.45c0 .99-.51 1.45-1.44 1.45h-3.04l4.48-4.48Z" />
  </svg>
);
export default SvgCirclerectanglefilledpatterndiagonallineBold;
