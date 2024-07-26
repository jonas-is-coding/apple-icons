import * as React from "react";
const SvgCarseatrightforwardandbackwardfillBold = ({
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
    <path d="M27.601 20.668c1.06-3.82-1.67-5.57-8.45-5.57-2.91 0-5.82.24-8.23.66.56-4.38-.73-7.99-3.63-10.03.34-3.27-1.75-5.73-4.28-5.73-2.12 0-3.54 1.72-2.82 4.61l4.55 18.42c.48 1.96 1.76 3 3.68 3h14.29c2.61 0 3.76-1.25 4.89-5.36m-8.78 13.63c0 .85.75 1.21 1.45.79l4.16-2.5c.68-.41.67-1.29 0-1.7l-4.16-2.51c-.7-.42-1.45-.02-1.45.8Zm-5.93 0v-5.12c0-.82-.75-1.21-1.45-.78l-4.16 2.5c-.68.4-.7 1.29 0 1.69l4.16 2.51c.7.41 1.45.05 1.45-.8" />
  </svg>
);
export default SvgCarseatrightforwardandbackwardfillBold;
