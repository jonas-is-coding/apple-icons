import * as React from "react";
const SvgArrowshapeturnupleftcirclefillBold = ({
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
    <path d="M12.372 24.754c6.83 0 12.38-5.55 12.38-12.38S19.202.004 12.372.004.002 5.544.002 12.374s5.54 12.38 12.37 12.38m-1.15-7.06c-.39 0-.69-.16-1.06-.51l-5.03-4.67c-.26-.24-.37-.56-.37-.83 0-.29.11-.59.37-.82l5.03-4.67c.41-.37.68-.52 1.05-.52.6 0 1.03.47 1.03 1.04v2.06h.12c4.1 0 6.19 2.65 6.19 7.1 0 1.16-.4 1.74-.99 1.74-.42 0-.76-.17-1.05-.7-.82-1.53-2.04-2.29-4.15-2.29h-.12v2.05c0 .58-.43 1.02-1.02 1.02" />
  </svg>
);
export default SvgArrowshapeturnupleftcirclefillBold;
