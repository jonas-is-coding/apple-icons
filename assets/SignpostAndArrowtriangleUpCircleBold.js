import * as React from "react";
const SvgSignpostandarrowtriangleupcircleBold = ({
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
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-3.08a9.29 9.29 0 0 1-9.29-9.29c0-5.15 4.16-9.29 9.29-9.29 5.15 0 9.3 4.14 9.3 9.29 0 5.13-4.15 9.29-9.3 9.29m-5.52-9.06c0 .91.53 1.43 1.44 1.43h3.32v3.39h-1.56c-.41 0-.75.34-.75.76 0 .4.34.74.75.74h4.64c.41 0 .75-.34.75-.74 0-.42-.34-.76-.75-.76h-1.56v-3.39h3.32c.9 0 1.43-.52 1.43-1.43v-3.75c0-.9-.53-1.41-1.43-1.41h-3.32v-.9c0-.41-.35-.75-.76-.75s-.76.34-.76.75v.9h-3.32c-.91 0-1.44.51-1.44 1.41Zm3.78-1.26 1.37-1.9c.2-.29.55-.29.75 0l1.37 1.9c.26.37.14.72-.29.72h-2.91c-.43 0-.56-.35-.29-.72" />
  </svg>
);
export default SvgSignpostandarrowtriangleupcircleBold;
