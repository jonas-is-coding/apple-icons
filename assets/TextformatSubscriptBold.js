import * as React from "react";
const SvgTextformatsubscriptBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M1.852 18.054c1.08 0 1.68-.48 1.98-1.61l.94-2.77h6.3l.94 2.77c.3 1.13.89 1.61 1.98 1.61 1.17 0 1.93-.71 1.93-1.79 0-.42-.07-.77-.21-1.21l-4.65-12.9c-.5-1.46-1.49-2.15-3.12-2.15-1.53 0-2.52.7-3.02 2.14l-4.71 13.05c-.14.4-.21.78-.21 1.12 0 1.08.7 1.74 1.85 1.74m3.76-7.26 2.3-7.13h.08l2.31 7.13Zm16.37 10.29c.8 0 1.34-.46 1.34-1.37v-7.74c0-.89-.62-1.44-1.51-1.44-.73 0-1.16.26-1.7.62l-1.74 1.16c-.44.29-.62.56-.62.99 0 .58.41.98.9.98.29 0 .45-.08.78-.29l1.19-.81h.04v6.53c0 .91.54 1.37 1.32 1.37" />
  </svg>
);
export default SvgTextformatsubscriptBold;
