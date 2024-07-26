import * as React from "react";
const SvgArrowcounterclockwisecirclefillBold = ({
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
    <path d="M12.372 24.754c6.83 0 12.38-5.55 12.38-12.38S19.202.004 12.372.004.002 5.544.002 12.374s5.54 12.38 12.37 12.38m5.43-11.82c0 3.01-2.43 5.46-5.43 5.46-2.99 0-5.41-2.45-5.41-5.43 0-.6.48-1.08 1.07-1.08s1.07.48 1.07 1.08c0 1.81 1.46 3.27 3.27 3.27 1.83 0 3.27-1.47 3.27-3.27 0-1.6-1.11-2.96-2.56-3.09a5 5 0 0 1-.37-.05l.65.66c.11.13.17.34.17.55 0 .61-.43.99-.99.99-.27 0-.54-.13-.72-.31l-2.19-2.2c-.4-.39-.39-1.05-.01-1.44l2.19-2.21c.19-.19.45-.36.75-.36.61 0 .98.46.98.94 0 .31-.12.49-.25.66l-.47.51h.27c2.55.21 4.71 2.52 4.71 5.32" />
  </svg>
);
export default SvgArrowcounterclockwisecirclefillBold;
