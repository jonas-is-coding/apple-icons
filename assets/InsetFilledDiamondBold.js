import * as React from "react";
const SvgInsetfilleddiamondBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m1.43 16.724 9.43 9.43c1.9 1.89 3.95 1.9 5.84.01l9.47-9.46c1.89-1.88 1.87-3.94-.01-5.84l-9.44-9.43c-1.9-1.9-3.96-1.91-5.84-.02l-9.47 9.46c-1.89 1.89-1.88 3.95.02 5.85m2.38-1.91c-.68-.68-.72-1.34 0-2.05l8.95-8.94c.72-.72 1.37-.7 2.05-.02l8.96 8.97c.68.67.71 1.34 0 2.05l-8.96 8.94c-.7.72-1.37.69-2.05.01Zm2.14-.55 7.37 7.37c.32.32.64.32.95 0l7.38-7.37c.3-.32.3-.62-.02-.95l-7.36-7.36c-.32-.32-.63-.32-.95 0l-7.35 7.36c-.33.33-.33.63-.02.95" />
  </svg>
);
export default SvgInsetfilleddiamondBold;
