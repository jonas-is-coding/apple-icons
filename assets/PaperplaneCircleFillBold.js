import * as React from "react";
const SvgPaperplanecirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m.38-4.81c-.65 0-.93-.49-1.14-1.17l-.96-3.1c-.14-.49-.11-.87.22-1.21l6.74-7.38c.09-.1.09-.22.01-.3a.24.24 0 0 0-.3 0l-7.38 6.77c-.39.35-.7.35-1.21.19l-3.14-.96c-.67-.21-1.13-.49-1.13-1.13 0-.56.41-.94 1-1.15l11.37-4.36c.27-.1.5-.15.73-.15.52 0 .85.33.85.85q0 .33-.15.72l-4.34 11.35c-.25.63-.62 1.03-1.17 1.03" />
  </svg>
);
export default SvgPaperplanecirclefillBold;
