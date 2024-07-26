import * as React from "react";
const SvgArrowtriangleheadturnuprightdiamondBold = ({
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
    <path d="m1.43 16.724 9.43 9.43c1.9 1.89 3.95 1.9 5.84.01l9.47-9.46c1.89-1.88 1.87-3.94-.01-5.84l-9.44-9.43c-1.9-1.9-3.96-1.91-5.84-.02l-9.47 9.46c-1.89 1.89-1.88 3.95.02 5.85m2.38-1.91c-.68-.68-.72-1.34 0-2.05l8.95-8.94c.72-.72 1.37-.7 2.05-.02l8.96 8.97c.68.67.71 1.34 0 2.05l-8.96 8.94c-.7.72-1.37.69-2.05.01Zm4.93 2.18c0 .82.48 1.38 1.27 1.38.78-.01 1.26-.56 1.26-1.38v-2.45c0-.74.37-1.09 1.04-1.09h2.53v1.77c0 .84.91 1.21 1.61.58l3.04-2.69c.66-.59.64-1.28 0-1.85l-3.04-2.7c-.69-.62-1.61-.26-1.61.59v1.77h-3.1c-1.98 0-3 1.02-3 2.96Z" />
  </svg>
);
export default SvgArrowtriangleheadturnuprightdiamondBold;
