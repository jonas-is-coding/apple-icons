import * as React from "react";
const SvgApplepenciladapterusbcBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M3.542 26.95h7.56c2.06 0 3.54-1.47 3.54-3.54V3.48c0-2.09-1.47-3.48-3.65-3.48h-7.35C1.462 0 .002 1.39.002 3.48v19.93c0 2.07 1.46 3.54 3.54 3.54m-.75-23.11c0-.65.43-1.05 1.13-1.05h6.79c.7 0 1.12.4 1.12 1.05v16.1c-.23-.04-.48-.07-.73-.07h-7.56c-.26 0-.52.03-.75.07Zm4.53 3.32c.88 0 1.6-.72 1.6-1.61 0-.86-.72-1.59-1.6-1.59a1.6 1.6 0 0 0 0 3.2m-3.78 17.13c-.52 0-.89-.36-.89-.88 0-.51.37-.88.89-.88h7.56c.51 0 .87.37.87.88 0 .52-.36.88-.87.88Z" />
  </svg>
);
export default SvgApplepenciladapterusbcBold;
