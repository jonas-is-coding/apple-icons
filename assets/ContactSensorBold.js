import * as React from "react";
const SvgContactsensorBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M10.962-.002c-.63 0-1.12.49-1.12 1.12v4.41h2.24v-4.41c0-.63-.5-1.12-1.12-1.12m-6.82 26.19h5.7V5.528h-5.7c-2.68 0-4.14 1.46-4.14 4.12v12.44c0 2.65 1.46 4.1 4.14 4.1m13.61 0c2.67 0 4.14-1.45 4.14-4.1V9.648c0-2.65-1.47-4.12-4.14-4.12h-5.67v20.66Zm-13.42-2.88c-.94 0-1.45-.46-1.45-1.45V9.878c0-1 .51-1.45 1.45-1.45h2.62v14.88Zm13.22 0h-2.59V8.428h2.59c.94 0 1.44.45 1.44 1.45v11.98c0 .99-.5 1.45-1.44 1.45m-6.59 8.43c.62 0 1.12-.5 1.12-1.12v-4.43h-2.24v4.43c0 .62.49 1.12 1.12 1.12" />
  </svg>
);
export default SvgContactsensorBold;
