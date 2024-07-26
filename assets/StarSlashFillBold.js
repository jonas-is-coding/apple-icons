import * as React from "react";
const SvgStarslashfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m10.24 6.324 9.81 9.78 5.83-4.16c.9-.65 1.3-1.4 1.03-2.19s-1.02-1.18-2.14-1.16l-7.3.05-2.22-6.98c-.34-1.07-.92-1.66-1.75-1.66-.84 0-1.42.59-1.76 1.66Zm13.47 18.46a.99.99 0 0 0 1.39 0c.38-.4.39-1.01 0-1.39L5.24 3.564c-.39-.38-1.02-.39-1.41 0-.37.37-.37 1.03 0 1.39ZM5.25 8.614l-3.05-.02c-1.1-.02-1.85.37-2.12 1.14-.27.81.13 1.56 1.03 2.21l5.97 4.26-2.34 6.95c-.36 1.03-.22 1.87.44 2.37.67.51 1.5.35 2.4-.31l5.92-4.34 5.9 4.34c.86.64 1.6.79 2.23.41.13-.08.23-.18.23-.45Z" />
  </svg>
);
export default SvgStarslashfillBold;
