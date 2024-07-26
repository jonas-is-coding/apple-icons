import * as React from "react";
const SvgStairsBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M1.442 23.57c.8 0 1.44-.65 1.44-1.44v-3.45h3.59c.96 0 1.68-.73 1.68-1.69v-3.58h3.58c.96 0 1.69-.72 1.69-1.68V8.14h3.58c.95 0 1.68-.71 1.68-1.67V2.88h3.44c.8 0 1.46-.65 1.46-1.44 0-.8-.66-1.44-1.46-1.44h-4.65c-.95 0-1.67.71-1.67 1.68v3.58h-3.59c-.96 0-1.68.73-1.68 1.68v3.58h-3.58c-.96 0-1.69.73-1.69 1.69v3.58h-3.59c-.95 0-1.67.72-1.67 1.68v4.66c0 .79.65 1.44 1.44 1.44" />
  </svg>
);
export default SvgStairsBold;
