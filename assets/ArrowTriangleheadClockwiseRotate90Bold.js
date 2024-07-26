import * as React from "react";
const SvgArrowtriangleheadclockwiserotate90Bold = ({
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
    <path d="M12.372 24.746c3.54 0 7.23-1.68 9.27-4.27.71-.82.65-1.77-.01-2.31-.71-.61-1.63-.4-2.28.27-1.72 2-4.16 3.23-6.98 3.23-5.14 0-9.29-4.16-9.29-9.29 0-5.15 4.15-9.29 9.29-9.29 4.3 0 7.91 2.9 8.98 6.86h-1.41c-.91 0-1.15.79-.65 1.46l2.89 3.89c.38.49 1 .5 1.36 0l2.9-3.88c.51-.68.26-1.47-.66-1.47h-1.27c-1.13-5.67-6.14-9.95-12.14-9.95-6.83 0-12.37 5.55-12.37 12.38s5.54 12.37 12.37 12.37" />
  </svg>
);
export default SvgArrowtriangleheadclockwiserotate90Bold;
