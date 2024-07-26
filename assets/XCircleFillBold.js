import * as React from "react";
const SvgXcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m-3.44-6.71c-.8 0-1.35-.53-1.35-1.28 0-.36.11-.65.39-1.02l2.55-3.44-2.45-3.31c-.3-.38-.42-.69-.42-1.06 0-.75.59-1.3 1.38-1.3.6 0 .94.22 1.39.91l1.99 2.96h.09l1.91-2.96c.41-.68.76-.91 1.37-.91.8 0 1.36.52 1.36 1.27 0 .35-.11.66-.4 1.03l-2.53 3.4 2.52 3.38c.28.36.4.67.4 1.03 0 .77-.56 1.3-1.38 1.3-.61 0-.95-.24-1.39-.93l-1.95-2.96h-.1l-2 2.96c-.47.71-.78.93-1.38.93" />
  </svg>
);
export default SvgXcirclefillBold;
