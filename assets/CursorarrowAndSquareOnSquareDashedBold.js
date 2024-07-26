import * as React from "react";
const SvgCursorarrowandsquareonsquaredashedBold = ({
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
    <path d="M4.142 20.327h1.95v1.72c0 2.66 1.47 4.11 4.14 4.11h7.59q-.06-.285-.06-.6l.05-2.42h-7.25c-.94 0-1.44-.46-1.44-1.46v-11.36c0-1 .5-1.46 1.44-1.46h11.39c.94 0 1.44.46 1.44 1.46v6.21l3.02 3.03v-9.61c0-2.66-1.46-4.11-4.13-4.11h-1.96v-1.72c0-2.65-1.45-4.12-4.14-4.12h-1.57v3.04h1.24c.94 0 1.45.45 1.45 1.45v1.35h-7.07c-2.67 0-4.14 1.45-4.14 4.11v7.36h-1.63c-.93 0-1.44-.47-1.44-1.46v-1.12H.002v1.49c0 2.66 1.46 4.11 4.14 4.11m3.41-17.29h5.23v-3.04h-5.23Zm-7.55 2.58h3.02v-1.13c0-1 .51-1.45 1.44-1.45h1.25v-3.04h-1.57c-2.68 0-4.14 1.46-4.14 4.12Zm0 7.2h3.02v-5.31H.002Zm19.53 12.85c-.01.61.68.83 1.08.41l1.49-1.56 1.71 4.29c.14.34.46.56.87.42l1.16-.45c.41-.15.42-.59.3-.85l-1.85-4.27 2.19-.01c.59.01.88-.6.46-1.03l-6.27-6.36c-.4-.4-.98-.17-1 .39Z" />
  </svg>
);
export default SvgCursorarrowandsquareonsquaredashedBold;
