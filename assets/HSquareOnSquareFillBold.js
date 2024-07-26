import * as React from "react";
const SvgHsquareonsquarefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M15.912-.003H4.142c-2.68 0-4.14 1.46-4.14 4.12v11.82c0 2.66 1.46 4.11 4.14 4.11h11.77c2.67 0 4.14-1.45 4.14-4.11V4.117c0-2.66-1.47-4.12-4.14-4.12m-9.48 15.69c-.98 0-1.57-.65-1.57-1.75v-7.91c0-1.11.59-1.75 1.57-1.75 1 0 1.58.64 1.58 1.75v2.69h4.02v-2.69c0-1.11.59-1.75 1.57-1.75 1 0 1.59.64 1.59 1.75v7.91c0 1.1-.59 1.75-1.59 1.75-.98 0-1.57-.65-1.57-1.75v-2.83h-4.02v2.83c0 1.1-.58 1.75-1.58 1.75m19.98-5.75c0-2.6-1.42-4.1-4.13-4.1h-.33v10.1c0 3.71-2.31 6.01-6.04 6.01h-9.82v.11c0 2.65 1.47 4.1 4.14 4.1h12.05c2.68 0 4.13-1.45 4.13-4.11Z" />
  </svg>
);
export default SvgHsquareonsquarefillBold;
