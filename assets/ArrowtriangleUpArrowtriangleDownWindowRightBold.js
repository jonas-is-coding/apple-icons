import * as React from "react";
const SvgArrowtriangleuparrowtriangledownwindowrightBold = ({
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
    <path d="M4.142 22.347h17.87c2.69 0 4.13-1.44 4.13-4.11V4.067c0-2.63-1.44-4.07-4.09-4.07h-5.73c-2.07 0-3.41.46-5.08 1.7l-9.14 6.87c-1.56 1.16-2.1 2.26-2.1 4.14v5.53c0 2.67 1.45 4.11 4.14 4.11m1.27-11.23c-.61 0-.77-.69-.28-1.05l8.2-6.18c.84-.65 1.53-.86 2.71-.86h5.68c.91 0 1.4.45 1.4 1.4v5.29c0 .84-.49 1.4-1.4 1.4Zm9.92-1.52h4.56c.66 0 .97-.59.62-1.16l-2.23-3.69c-.33-.54-1.03-.55-1.36 0l-2.21 3.69c-.36.56-.06 1.16.62 1.16m-.03 3.49h4.62c.68 0 1 .6.64 1.2l-2.26 3.75c-.34.55-1.05.56-1.39 0l-2.25-3.75c-.36-.59-.06-1.2.64-1.2" />
  </svg>
);
export default SvgArrowtriangleuparrowtriangledownwindowrightBold;
