import * as React from "react";
const SvgArrowdownrightandarrowupleftcirclefillBold = ({
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
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m-5.27-12.37c-.6 0-1.07-.48-1.07-1.08 0-.59.47-1.05 1.07-1.05h.4l1.38.17-2.61-2.42c-.48-.46-.48-1.23 0-1.71.47-.47 1.25-.49 1.7.01l2.45 2.61-.18-1.41v-.41c0-.59.48-1.06 1.07-1.06.58 0 1.06.47 1.06 1.06v3.89c0 .92-.49 1.4-1.39 1.4Zm6.34 6.34c-.6 0-1.07-.47-1.07-1.07v-3.89c0-.91.49-1.38 1.4-1.38h3.88c.58 0 1.06.47 1.06 1.07 0 .58-.48 1.05-1.06 1.05h-.4l-1.39-.18 2.61 2.44c.49.45.48 1.23.01 1.7-.48.47-1.26.49-1.71 0l-2.45-2.62.17 1.4v.41c0 .6-.48 1.07-1.05 1.07" />
  </svg>
);
export default SvgArrowdownrightandarrowupleftcirclefillBold;
