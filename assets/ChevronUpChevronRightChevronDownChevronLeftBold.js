import * as React from "react";
const SvgChevronupchevronrightchevrondownchevronleftBold = ({
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
    <path d="M14.826.662c-.87-.88-2.09-.88-2.97 0l-3.54 3.52c-.7.71-.7 1.62 0 2.31.7.72 1.6.72 2.32-.01l2.71-2.69 2.69 2.69c.72.72 1.62.72 2.31.01.7-.7.7-1.61 0-2.31Zm5.37 17.69c.7.72 1.62.71 2.32 0l3.53-3.52c.87-.86.87-2.1.01-2.97l-3.54-3.54c-.72-.72-1.64-.71-2.32-.01-.71.69-.73 1.62 0 2.33l2.72 2.7-2.71 2.7c-.7.72-.71 1.62-.01 2.31m-13.7.04c.72-.71.72-1.62 0-2.33l-2.72-2.71 2.71-2.71c.7-.7.69-1.62.01-2.32-.71-.7-1.61-.69-2.33.01l-3.52 3.53c-.86.86-.86 2.1 0 2.97l3.53 3.55c.73.71 1.64.71 2.32.01m5.36 7.65c.88.88 2.1.88 2.97 0l3.54-3.53c.71-.7.71-1.61 0-2.31-.71-.71-1.6-.71-2.32.02l-2.7 2.69-2.71-2.72c-.73-.71-1.63-.71-2.33-.01-.69.7-.69 1.62.01 2.32Z" />
  </svg>
);
export default SvgChevronupchevronrightchevrondownchevronleftBold;
