import * as React from "react";
const SvgTagslashfillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m8.875 5.276 13.36 13.36 4.12-4.13c.97-.97 1.13-1.59 1.13-3.07v-4.43c0-1.37-.33-1.92-1.39-2.96l-2.66-2.68c-1.05-1.04-1.59-1.37-2.96-1.37h-4.44c-1.47 0-2.07.18-3.04 1.15Zm15.14 20.14c.38.38 1.02.39 1.39 0a.98.98 0 0 0 0-1.39L3.465 2.096c-.37-.39-1-.39-1.4 0-.37.38-.37 1.02 0 1.4Zm-5.76-15.01c-1.02 0-1.8-.8-1.8-1.8 0-1.02.78-1.82 1.8-1.82 1.03 0 1.82.8 1.82 1.82 0 1-.79 1.8-1.82 1.8m.35 11.86L5.235 8.896l-3.83 3.83c-1.86 1.86-1.89 3.93 0 5.81l7.57 7.56c1.89 1.88 3.94 1.88 5.8 0Z" />
  </svg>
);
export default SvgTagslashfillBold;
