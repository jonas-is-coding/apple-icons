import * as React from "react";
const SvgIpodshufflegen1Bold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M3.702 27.101h7.37c2.16 0 3.57-1.4 3.57-3.56V3.561c0-2.14-1.41-3.56-3.57-3.56h-7.37c-2.24 0-3.7 1.42-3.7 3.56v19.99c0 2.15 1.46 3.55 3.7 3.55m.65-3.19c-.82 0-1.33-.47-1.33-1.29V4.491c0-.81.51-1.28 1.33-1.28h5.94c.81 0 1.32.48 1.32 1.29v18.12c0 .8-.51 1.29-1.32 1.29Zm2.96-11.29c1.97 0 3.58-1.61 3.58-3.59 0-1.96-1.61-3.57-3.58-3.57a3.57 3.57 0 0 0-3.56 3.57c0 1.98 1.59 3.59 3.56 3.59m0-1.8c-.98 0-1.77-.79-1.77-1.79 0-.99.79-1.78 1.77-1.78 1 0 1.79.79 1.79 1.78 0 1-.79 1.79-1.79 1.79" />
  </svg>
);
export default SvgIpodshufflegen1Bold;
