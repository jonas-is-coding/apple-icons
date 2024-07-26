import * as React from "react";
const SvgEraserlinedashedBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="m1.52 18.772 5.11 5.1c1.98 1.98 4.3 2.03 6.18.15l11.59-11.6c1.33-1.33 1.32-3.09-.03-4.42l-6.97-6.99c-1.35-1.33-3.11-1.36-4.42-.03l-11.6 11.6c-1.89 1.87-1.83 4.21.14 6.19m13.23-15.28c.23-.26.57-.26.82-.02l6.35 6.36c.23.23.22.56-.01.82l-7.96 7.94-7.16-7.16ZM3.76 16.732c-.71-.72-.75-1.5-.12-2.15l1.35-1.34 7.16 7.16-1.35 1.34c-.63.65-1.43.59-2.13-.1Zm10.43 7.93h8.05c.83 0 1.51-.68 1.51-1.51s-.68-1.51-1.51-1.51h-5.03Zm12.77 0h5.56c.84 0 1.52-.68 1.52-1.51s-.68-1.51-1.52-1.51h-5.56c-.83 0-1.51.68-1.51 1.51s.68 1.51 1.51 1.51" />
  </svg>
);
export default SvgEraserlinedashedBold;
