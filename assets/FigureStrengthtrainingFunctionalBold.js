import * as React from "react";
const SvgFigurestrengthtrainingfunctionalBold = ({
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
    <path d="M11.643 5.524c1.51 0 2.75-1.25 2.75-2.78 0-1.51-1.24-2.74-2.75-2.74-1.54 0-2.77 1.23-2.77 2.74 0 1.53 1.23 2.78 2.77 2.78m-3.38 19.26c.49-.13.81-.29 1.03-.69l2.63-4.71c.04-.07.1-.12.2-.12h6.27v5.98c0 .77.62 1.36 1.34 1.36.78 0 1.39-.59 1.39-1.36v-7.21c0-.88-.5-1.42-1.41-1.5l-5.34-.48v-6.74c0-1.4-1-2.59-2.73-2.59h-.58c-1 0-1.79.18-2.78.92l-4.06 3.04c-.76.57-.72 1.7.08 2.23l4.89 3.26v.22l-2.13 5.9-6.05 1.66c-.73.2-1.16.95-.96 1.65.22.78.91 1.16 1.67.96Zm-.84-13.08 1.48-1.11c.13-.11.29-.04.29.13v2.17Z" />
  </svg>
);
export default SvgFigurestrengthtrainingfunctionalBold;
