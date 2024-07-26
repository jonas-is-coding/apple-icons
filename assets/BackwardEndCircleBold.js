import * as React from "react";
const SvgBackwardendcircleBold = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width="1em"
    height="1em"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path d="M12.372 24.746c6.83 0 12.38-5.54 12.38-12.37s-5.55-12.38-12.38-12.38S.002 5.546.002 12.376s5.54 12.37 12.37 12.37m0-3.08a9.29 9.29 0 0 1-9.29-9.29c0-5.15 4.16-9.29 9.29-9.29 5.15 0 9.3 4.14 9.3 9.29 0 5.13-4.15 9.29-9.3 9.29m-4.17-5.11h1.21c.5 0 .76-.24.76-.76v-2.98c.11.18.28.33.52.47l5.05 2.96c.22.14.43.2.66.2.48 0 .89-.37.89-1.02v-6.07c0-.66-.39-1.02-.89-1.02-.23 0-.44.05-.66.2l-5.05 2.95c-.24.14-.41.28-.52.46v-2.98c0-.51-.26-.77-.76-.77h-1.21c-.5 0-.76.25-.76.77v6.83c0 .52.26.76.76.76" />
  </svg>
);
export default SvgBackwardendcircleBold;
