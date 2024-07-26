import * as React from "react";
const SvgArrowdownrightandarrowupleftsquarefillBold = ({
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
    <path d="M4.142 22.404h14.13c2.68 0 4.13-1.45 4.13-4.1V4.114c0-2.65-1.45-4.11-4.13-4.11H4.142c-2.68 0-4.14 1.45-4.14 4.11v14.19c0 2.65 1.46 4.1 4.14 4.1m1.86-11.2c-.59 0-1.07-.48-1.07-1.08 0-.59.48-1.05 1.07-1.05h.4l1.38.17-2.6-2.42c-.49-.46-.48-1.23-.01-1.71.48-.47 1.25-.49 1.71.01l2.45 2.61-.18-1.41v-.41a1.06 1.06 0 0 1 2.12 0v3.89c0 .92-.49 1.4-1.39 1.4Zm6.34 6.34c-.59 0-1.07-.47-1.07-1.07v-3.89c0-.91.49-1.38 1.4-1.38h3.88c.58 0 1.06.47 1.06 1.07 0 .58-.48 1.05-1.06 1.05h-.4l-1.39-.18 2.61 2.44c.49.45.48 1.23.01 1.7-.48.47-1.26.49-1.7 0l-2.46-2.62.17 1.4v.41c0 .6-.47 1.07-1.05 1.07" />
  </svg>
);
export default SvgArrowdownrightandarrowupleftsquarefillBold;
