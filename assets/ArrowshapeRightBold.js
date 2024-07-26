import * as React from "react";
const SvgArrowshaperightBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M25.878 11.169c0-.52-.21-1.09-.68-1.54l-9.34-8.64c-.78-.71-1.29-.99-1.99-.99-1.11 0-1.94.87-1.94 1.96v3.79h-8.49c-2.17 0-3.44 1.27-3.44 3.43v4.06c0 2.15 1.27 3.41 3.44 3.41h8.49v3.78c0 1.09.83 1.92 1.92 1.92.73 0 1.3-.29 2.01-.94l9.33-8.69c.46-.45.69-1.05.69-1.55m-3.38 0c0 .07-.03.13-.11.21l-7.49 7.07c-.07.07-.13.09-.2.09-.11 0-.19-.08-.19-.2v-4c0-.25-.12-.37-.37-.37H3.727c-.68 0-1.04-.34-1.04-1.04v-3.45c0-.7.36-1.04 1.04-1.04h10.41c.25 0 .37-.11.37-.38v-4.1c0-.12.08-.2.2-.2.06 0 .13.04.19.08l7.49 7.12c.08.09.11.14.11.21" />
  </svg>
);
export default SvgArrowshaperightBold;
