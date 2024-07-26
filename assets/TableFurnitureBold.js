import * as React from "react";
const SvgTablefurnitureBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M1.352 19.738h4.52c.81 0 1.36-.53 1.36-1.35V7.228h16.05v11.16c0 .82.55 1.35 1.36 1.35h4.53c.8 0 1.34-.54 1.34-1.35V1.348c0-.8-.54-1.35-1.33-1.35H1.352c-.81 0-1.35.55-1.35 1.35v17.04c0 .81.54 1.35 1.35 1.35m1.31-16.83c0-.14.1-.25.23-.25h24.73c.14 0 .23.11.23.25v1.42c0 .14-.09.24-.23.24H2.892c-.13 0-.23-.1-.23-.24Zm.24 14.21c-.14 0-.24-.1-.24-.24v-9.65h1.9v9.65c0 .14-.1.24-.24.24Zm23.3 0c-.14 0-.24-.1-.24-.24v-9.65h1.89v9.65c0 .14-.09.24-.23.24Z" />
  </svg>
);
export default SvgTablefurnitureBold;
