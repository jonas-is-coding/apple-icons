import * as React from "react";
const SvgForwardcirclefillBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m8.52-12.45c0 .41-.26.7-.68.95l-5.31 3.13c-.24.12-.45.19-.71.19-.5 0-.94-.37-.94-1.06v-2.78c-.12.21-.3.38-.56.52l-5.32 3.13c-.24.14-.46.19-.72.19-.5 0-.93-.37-.93-1.06v-6.41c0-.68.42-1.06.93-1.06.26 0 .48.06.72.2l5.32 3.12c.26.15.44.3.56.5v-2.76c0-.68.42-1.06.93-1.06.27 0 .48.06.72.2l5.31 3.12c.42.25.68.53.68.94" />
  </svg>
);
export default SvgForwardcirclefillBold;
