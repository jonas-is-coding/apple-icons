import * as React from "react";
const SvgArrowupbackwardandarrowdownforwardBold = ({
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
    <path d="M1.642 10.374c.92 0 1.63-.66 1.63-1.6v-.57l-.27-2.97 2.13 2.24 2.97 3c.31.32.72.47 1.16.47.99 0 1.7-.7 1.7-1.7 0-.44-.19-.83-.5-1.13l-2.99-2.99-2.25-2.12 3 .27h.77c.92 0 1.6-.7 1.6-1.63 0-.95-.67-1.64-1.6-1.64h-6.48c-1.59 0-2.51.92-2.51 2.52v6.25c0 .93.7 1.6 1.64 1.6m12.33 12.6h6.47c1.59 0 2.52-.92 2.52-2.51v-6.27c0-.93-.71-1.6-1.65-1.6-.92 0-1.62.67-1.62 1.6v.58l.27 2.97-2.14-2.25-2.96-2.99c-.32-.32-.73-.47-1.16-.47-1.01 0-1.7.7-1.7 1.7 0 .45.19.83.49 1.14l2.99 2.99 2.25 2.11-3-.26h-.76c-.94 0-1.61.69-1.61 1.63 0 .93.67 1.63 1.61 1.63" />
  </svg>
);
export default SvgArrowupbackwardandarrowdownforwardBold;
