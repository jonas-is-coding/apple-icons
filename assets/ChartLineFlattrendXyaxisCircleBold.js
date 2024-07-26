import * as React from "react";
const SvgChartlineflattrendxyaxiscircleBold = ({
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
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-3.08a9.29 9.29 0 0 1-9.29-9.29c0-5.15 4.16-9.29 9.29-9.29 5.15 0 9.3 4.14 9.3 9.29 0 5.13-4.15 9.29-9.3 9.29m-6.07-5.26c0 .68.46 1.13 1.13 1.13h10.11c.47 0 .86-.37.86-.85 0-.49-.39-.85-.86-.85h-9.54v-3.54h6.31v.88c0 .52.55.79 1.02.51l2.74-1.59c.46-.25.47-.89.03-1.15l-2.76-1.63c-.47-.28-1.03-.03-1.03.49v.89h-6.31v-2.93c0-.48-.36-.86-.84-.86-.49 0-.86.38-.86.86Z" />
  </svg>
);
export default SvgChartlineflattrendxyaxiscircleBold;
