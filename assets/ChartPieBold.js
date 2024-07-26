import * as React from "react";
const SvgChartpieBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m1-13.86v-7.76c2.76.3 5.16 1.8 6.66 3.96Zm-1 10.78a9.29 9.29 0 0 1-9.29-9.29c0-4.67 3.42-8.52 7.9-9.19v9.59c0 .42.13.65.38.9l6.44 6.25a9.23 9.23 0 0 1-5.43 1.74m1.97-8.56 6.79-3.88c.35.98.54 2.05.54 3.15 0 2.23-.78 4.26-2.08 5.87Z" />
  </svg>
);
export default SvgChartpieBold;
