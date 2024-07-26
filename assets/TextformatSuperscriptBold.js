import * as React from "react";
const SvgTextformatsuperscriptBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M18.812 10.551c.78 0 1.32-.46 1.32-1.38v-7.74c0-.89-.62-1.43-1.51-1.43-.73 0-1.16.26-1.7.61l-1.73 1.17c-.45.29-.63.56-.63.98 0 .58.41.98.91.98.28 0 .44-.07.77-.3l1.2-.79h.03v6.52c0 .92.55 1.38 1.34 1.38m-16.96 10.14c1.08 0 1.68-.48 1.98-1.61l.94-2.77h6.3l.94 2.77c.3 1.13.89 1.61 1.98 1.61 1.17 0 1.93-.71 1.93-1.79 0-.42-.07-.77-.21-1.21l-4.65-12.9c-.5-1.46-1.49-2.15-3.12-2.15-1.53 0-2.52.7-3.02 2.14l-4.71 13.05c-.14.4-.21.78-.21 1.12 0 1.08.7 1.74 1.85 1.74m3.76-7.26 2.3-7.13h.08l2.31 7.13Z" />
  </svg>
);
export default SvgTextformatsuperscriptBold;
