import * as React from "react";
const SvgPlatterfilledbottomandarrowdowniphoneBold = ({
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
    <path d="M.002 23.541c0 2.13 1.48 3.55 3.69 3.55h10.15c2.13 0 3.55-1.42 3.55-3.55V3.561c0-2.13-1.42-3.56-3.55-3.56H3.692c-2.21 0-3.69 1.43-3.69 3.56Zm3.02-.92V4.491c0-.82.49-1.28 1.33-1.28h8.69c.83 0 1.33.47 1.33 1.29v18.1c0 .82-.5 1.29-1.33 1.29h-8.69c-.84 0-1.33-.45-1.33-1.27m2.28-8.64c0 .23.07.43.23.6l2.46 2.61c.19.21.45.32.7.32.26 0 .52-.12.71-.32l2.46-2.61c.16-.17.22-.37.22-.6 0-.46-.33-.76-.8-.76a.75.75 0 0 0-.62.28l-.71.77-.42.56.05-1.16v-3.02c0-.49-.37-.84-.89-.84-.51 0-.89.35-.89.84v3.02l.06 1.16-.42-.56-.71-.77a.78.78 0 0 0-.63-.28c-.46 0-.8.3-.8.76m.32 8.35h6.14c.63 0 1.05-.42 1.05-1.06v-1.64c0-.65-.42-1.06-1.05-1.06h-6.14c-.62 0-1.04.41-1.04 1.06v1.64c0 .64.42 1.06 1.04 1.06" />
  </svg>
);
export default SvgPlatterfilledbottomandarrowdowniphoneBold;
